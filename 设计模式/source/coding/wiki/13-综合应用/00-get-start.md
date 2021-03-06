# 综合应用

使用 jQuery 做一个模拟购物的小 demo ，不用 vue 或 React 是因为它们封装了很多东西，使用封装的框架，就不容易分析设计模式。

- 工厂模式：`$(...)`，创建商品实例
- 单例模式：购物车
- 装饰器模式：log（点击按钮日志打点）
- 代理模式：优惠商品打折：name 有“优惠”字样、price 是原价 80%
- 外观模式：？？？
- 适配器模式：？？？
- 观察者模式：事件监听、Promise
- 状态模式：添加到购物车 & 从购物车删除
- 模板方法模式：渲染的方法统一成一个，里面再分别写渲染不同部分的代码
- 职责连模式：Promise 多个 then

**注意，这不是一个完整的项目，是为了演示设计模式而做的一个真实项目的一部分**

学习设计模式前后的对比：

- 学习之前：主要考虑如何操作 DOM ，绑定事件，发送请求
- 学习之后：考虑面向对象，设计模式，合理性和可扩展性（其实这些都是 vue React 统一做的，是前端开发的升级）
