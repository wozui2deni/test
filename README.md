# vue + vue-router + axios + webpack 完成单页面小项目开发


## 1.完成首页布局及注册各路由组件
1.1 首页Header采用固定头部，名为“吴泰兴的小项目”
1.2 中间为路由区域，根据底部的Tabbar切换组件，默认为/home路由对应的组件
1.3 底部为Tabbar区域，分别注册四个路由，对应四个组件，四个组件的内容则根据路由渲染在中间路由区域

## 2.第一个路由/home组件的页面布局
2.1 头部采用的是mint-ui组件的轮播图，内容则是通过获取免费API数据接口渲染出来的
2.2 中间部分为六宫格导航区域

## 3.第四个路由/loginContainer的页面布局
3.1 这是一个登录成功后才能显示的组件，根据sessionStorage中是否存储有username来判断是否已登录，如果已登录，则正常显示，如果没登录，则被强制push到登录组件

## 4.利用json-server创建本地假数据，从而实现登录、注册功能
4.1 在进入第四个路由/loginContainer时，就会如 3.1 所说，被强制push到登录组件，此时显示登录页面
4.2 先利用json数据中已存在的账号和密码进行登录尝试，向本地api接口发送get请求，若请求到的data数组length大于0，则弹出登录成功，把用户的username存储到sessionStorage中，保证窗口关闭都是已登录状态，再push到/loginContainer路由，否则弹出 账号或密码有误。
4.3 注册组件定义两个请求，先根据用户输入的账号发送get请求，若返回data.length大于0，则弹出 用户名已存在，否则再将用户输入的账号及密码发送post请求，添加到数据库中，在回调函数中弹出 注册成功，并push到 登录组件 

注意点：json-server的post请求规则，如果要往数据库中添加数据对象，则需要为每个数据对象设置独立的id，不然的话发送post请求会用新数据覆盖旧数据

