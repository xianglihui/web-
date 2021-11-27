# 项目搭建

vite2 + vue3.0 + vuex + vue-router + typescript + json-server

# 需求页面

- 欢迎页面
  - 注册页面
    - 姓名手机号页面
    - 输入密码以及确认密码页面
    - 手机验证码注册页面
  - 登录页面
- 首页
  - 商品详情
- 探索页
  - 分类列表
  - 分类下商品
- 购物车
  - 正常购物车列表
  - 没有 checkout 的购物车
  - 购物车滑动列表
  - 支付页面
    - 支付成功
    - 支付失败
- 喜欢的
  - 空状态页
  - 列表滑动页
- 个人中心
  - 订单
    - 正在进行的空状态
    - 历史订单
    - 正在进行的订单列表
  - 配置列表
    - 编辑姓名手机号
    - 修改密码
  - 卡片页面
    - 正常卡片列表
    - 卡片列表滑动
    - 新增卡片
    - 卡片页面空状态
  - 地址页面
    - 新增地址
    - 地址列表
    - 编辑地址


# 建议开发环境

- Git: - 版本管理工具
- VS Code Extensions
- Vetur
- ESLint - 脚本代码检查
- Prettier - 代码格式化

# UI 框架

vantUI 3.x

# 启动

1. yarn install
2. yarn run dev

# 布局方案

- postcss-pxtorem + lib-flexible 实现 rem 布局

# 其他插件

1. BetterScroll 2.0：解决移动端（已支持 PC）各种滚动场景需求
2. json-server 数据模拟

# 包管理工具

yarn

# Git 提交规范

- feat 增加新功能
- fix 修复问题/BUG
- style 代码风格相关无影响运行结果的
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等
- workflow 工作流改进
- ci 持续集成
- types 类型定义文件更改
- wip 开发中

# 遇见的问题

- provide() can only be used inside setup(),起因是想通过 router.beforeEach 拿到 meta.title 通过 provide 存储，再在子组件中通过 inject 取出，实践后报此警告并打印 undefined.
- .tsx 无法通过`template`模板语法传递 slot 插槽（应该能实现，但是能力与资料有限）,查看 src/components/field.tsx,line:32，无法插入插槽，tsx 不识别 template）

# 对 vue + tsx 思考

- 个人觉得业务方面代码 template 模板语法够用，对于灵活性更高的场景可以使用 tsx(如组件，v-if 与 v-else等),查看 src/views/login/register.tsx,属于试验代码，真实开发场景下觉得通过`component`组件渲染更加优雅。

```javascript
// component
<template v-for="(item,index) in test">
    <component :is="item" v-if="index == step" :key="index" ></component>
</template>

<script lang="ts" setup>
import Step from '...'
...
    const test = [Step1,Step2,...]
</script>
```

```javascript
// tsx
return () =>
  h(<div>{step.value === 0 ? <Step1></Step1> : <Step2></Step2>}</div>);
```
