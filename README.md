# VideoSystem

项目介绍
--------
该项目主要是为了实现，教师上传视频，学生观看视频的操作。后台部分使用Java实现。

前端思想
--------
基于MVC的JavaScript Web开发，提高代码的模块化程度。
>要确保应用中的视图、状态和数据彼此清晰分离，这样才能让架构更加整洁有序且更加健壮。引入MVC模式，数据管理则归入模型(MVC中的M)。模型应当从视图和控制器中解耦出来。与数据操作和行为相关的逻辑都应当放入模型中，通过命名空间进行管理。

>在JavaScript中，我们通过给对象添加属性来管理一个命名空间，这个命名空间可以是函数，也可以是变量。

核心技术 
-------
### bootstrap二次封装
Bootstrap，来自 Twitter，是目前很受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JavaScript的，它简洁灵活，使得 Web 开发更加快捷。

对于Bootstrap的使用，通常是根据自己的需求在Bootstrap官网或其他网站找到相应的组件代码，直接放到页面中相应的位置，如下：
```
下拉菜单实例
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
```
如上述代码，每一个DOM对象与页面元素一一对应，即，若希望页面有五行则相应的就需要在ul中写五个li。导致这种代码会有很多重复内容出现，代码冗长。于是，发现HTML文件中其实很多代码是"死"的，需要根据需求改变的内容并不是很多，所以，对Bootstrap进行了二次封装。

封装后的下拉菜单：
```
bootstrap_dropDownButtonMenu:'<div class="btn-group">'+
			'!!{buttonControl:<button id="%{btnId:}%" type="button" class="%{btn:btn btn-default dropdown-toggle}%" data-toggle="%{data_toggle:dropdown}%">'
			+' <span class="%{span_class:caret}%"></span></button>}!!'
		+'<ul class="dropdown-menu" role="menu">'
		+'!!{liList:<li><a href="%{hrefFirst:#}%" id="%{idFirst:}%">%{liFirst:程序员}%</a></li><li><a href="%{hrefSecond:#}%" id="%{idSecond:}%">%{liSecond:web前端}%</a></li><li><a href="%{hrefThree:#}%" id="%{idThree:}%">%{liThree:C语言}%</a></li>}!!'
		+'</ul>'
		+'</div>'
```
将HTML模板代码变为一段字符串，将需要改变的部分用%{ }%和!!{ }!!包裹起来，以便后面的解析，!!{ }!!标识该部分内容可以重复，即该组件可以重复出现。然后给这个模板一个对应的键名，以键值对的形式统一存储在html_model.js文件中。

这样的好处是，大大提高了代码的复用。

### util.js文件
util.js文件，为该工程的公共组件，所以直接存在于工程命名空间下。
util中主要的方法：

1.解析html模板，筛选出需要使用者添加的内容并显示，与实际代码实现无太多关系，方便使用者的工具。
```
getHtmlParameter : function(htmlName) {
			var htmlParameter = function(str, level) {
                //处理简单块，即，由%{}%包裹的内容
				var simpleBlock = function(html, tabCount) {
					var res = "";
					var tab = "\t\t\t\t\t\t\t\t\t\t";
					var objTmp = {};
					
					res += "\n";
					var strList = html.split("%");
					for(var i = 0; i < strList.length; i++) {
                        //检测%后的内容是否符合我们规定的格式
						var arrMatch = strList[i].match(/^{[_$a-zA-Z]+[_$\w]*:[^\n]*}$/);
						if(arrMatch != null) {
							var str = arrMatch[0];
							str = str.substring(1, str.length-1);
							var commaIndex = str.indexOf(":");
                            //模板中的键值
							var keyName = str.substring(0, commaIndex);
                            //模板中的属性值
							var keyValue = str.substring(commaIndex+1);
							
							if(objTmp[keyName] == undefined) {
								res += tab.substring(0, tabCount) + keyName + " : ";
                                //属性值默认为模板中内容，若为空，则显示“/*必填项！*/”
								res += (keyValue.length == 0) ? "\"\", /*必填项！*/\n" 
										: "\"" + keyValue + "\",\n";
								objTmp[keyName] = keyValue;
							}
						}
					}
					
					return res;
				};
				//以下，处理递归部分，基本做法同上。
				var result = "";
				var tab = "\t\t\t\t\t\t\t\t\t\t";
				var index = str.indexOf("!!{");
				if(index != -1 && str.substring(index).match(/^!!{[_$a-zA-Z]+[_$\w]*:/).length > 0) {
					var otherString = str.substring(index);
                    //getMatchIndex为括号匹配法，返回相匹配的右括号下标
					var matchEnd = $$.util.getMatchIndex(otherString);
					
					var leftString = str.substring(0, index);
					var middleString = otherString.substring(3, matchEnd);
					var rightString = otherString.substring(matchEnd+3);
					
					result += simpleBlock(leftString, level);
		
					var commaIndex = middleString.indexOf(":");
					var listName = middleString.substring(0, commaIndex);
					result += tab.substring(0, level) + listName + " : [{";
					middleString = middleString.substring(commaIndex+1);
					result += htmlParameter(middleString, level+1);
					result += tab.substring(0, level) + "},],";
					
					result += htmlParameter(rightString, level);
				} else if(str.length > 0) {
					result += simpleBlock(str, level);
				}
				
				return result;
			};
			
			var str = "{";
			str += htmlParameter(html, 1);
			str += "}\n\n";
			
			return str;
		}
```
2.根据参数来替换模板中的属性，完成DOM的初始化以及页面显示。
```

		wedgeHtml : function(elementId, html, parameter) {
			...
			var resolveHtml = function(str, parameter) {
                 //处理简单块，即，%{}%部分
				var resolveParameter = function(html, parameter) {
					var addPercent = false;
					
					var strList = html.split("%");
					for(var i = 0; i < strList.length; i++) {
						var matchStr = strList[i].match(/^{[_$a-zA-Z]+[_$\w]*:[^\n]*}$/);
                        //若模板匹配成功则进行如下操作
						if(matchStr !== null) {
							var str = matchStr[0];
							matchStr = str.substring(1, str.length-1);	// 去除{}
							var commaIndex = matchStr.indexOf(":");
							var key = matchStr.substring(0, commaIndex);
                            //若参数中存在相关内容，则替换掉模板中的对应内容，否则保持模板中的数据不变
							strList[i] = parameter[key] 
									? parameter[key] 
									: matchStr.substring(commaIndex+1);
							addPercent = false;
						} else {
							if(addPercent) {
                                //处理前去掉%，所以若之后的{}未匹配成功，则应该还原%
								strList[i] = "%" + strList[i];
							} else {
								addPercent = true;
							}
						}
					}
					
					return strList.join("");
				};
				
				var result = "";
				var index = str.indexOf("!!{");
				if(index == -1 || str.substring(index).match(/^!!{[_$a-zA-Z]+[_$\w]*:/).length <= 0) {
					return result += resolveParameter(str, parameter);
				}
				var otherString = str.substring(index);
				var matchEnd = $$.util.getMatchIndex(otherString);
				
				var leftString = str.substring(0, index);
				var middleString = otherString.substring(3, matchEnd);
				var rightString = otherString.substring(matchEnd+3);
					
				result += resolveParameter(leftString, parameter);

				var commaIndex = middleString.indexOf(":");
				var listName = middleString.substring(0, commaIndex);

				var arrayParameter = parameter[listName];
				if(!(arrayParameter instanceof Array)) {
					throw new Error("[" + listName + "]列表参数项不正确！");
				}
				middleString = middleString.substring(commaIndex+1);
				for(var i = 0; i < arrayParameter.length; i++) {
					result += resolveHtml(new String(middleString), arrayParameter[i]);
				}
					
				result += resolveHtml(rightString, parameter);
				
				return result;
			};
			
			var htmlString = resolveHtml(html, parameter);
            //将替换完成的html代码添加到指定元素下
			$(parentElement).html(htmlString);
		}
```
