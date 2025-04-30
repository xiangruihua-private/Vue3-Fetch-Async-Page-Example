1. 间距工具类 (Spacing)
通用格式
{property}{direction}-{size}
property: m (margin) 或 p (padding)
direction:
t - top
b - bottom
l - left
r - right
x - 左右
y - 上下
留空 - 四个方向
size:
0 - 0px
1 - 4px
2 - 8px
3 - 12px
4 - 16px
5 - 20px
6 - 24px
7 - 28px
8 - 32px
9 - 36px
10 - 40px
auto - auto
2. 排版工具类 (Typography)
文本对齐
text-left - 左对齐
text-center - 居中对齐
text-right - 右对齐
text-justify - 两端对齐
字体粗细
font-weight-thin - 100
font-weight-light - 300
font-weight-regular - 400
font-weight-medium - 500
font-weight-bold - 700
font-weight-black - 900
文本转换
text-lowercase - 小写
text-uppercase - 大写
text-capitalize - 首字母大写
字体大小
text-h1 - 6rem
text-h2 - 3.75rem
text-h3 - 3rem
text-h4 - 2.125rem
text-h5 - 1.5rem
text-h6 - 1.25rem
text-subtitle-1 - 1rem
text-subtitle-2 - 0.875rem
text-body-1 - 1rem
text-body-2 - 0.875rem
text-caption - 0.75rem
text-overline - 0.625rem
3. 颜色工具类 (Colors)
格式
{color}-{shade}
color: primary, secondary, accent, error, warning, info, success 或任何自定义颜色
shade:
lighten-5 到 lighten-1
darken-1 到 darken-4
accent-1 到 accent-4
留空 - 基础颜色
4. 显示工具类 (Display)
显示属性
d-inline
d-inline-block
d-block
d-flex
d-inline-flex
d-none
响应式显示
d-{breakpoint}-{value} (sm, md, lg, xl)
5. Flex 工具类 (Flexbox)
方向
flex-row
flex-row-reverse
flex-column
flex-column-reverse
对齐
justify-start
justify-end
justify-center
justify-space-between
justify-space-around
align-start
align-end
align-center
align-baseline
align-stretch
填充
flex-grow-1
flex-shrink-0
flex-wrap
flex-nowrap
6. 边框工具类 (Borders)
通用格式
border-{direction}
direction:
top
right
bottom
left
留空 - 全部
7. 浮动工具类 (Float)
float-left
float-right
float-none
8. 光标工具类 (Cursor)
cursor-pointer
cursor-default
cursor-wait
cursor-move
cursor-not-allowed
cursor-help
9. 其他实用工具类
溢出
overflow-auto
overflow-hidden
overflow-visible
圆角
rounded
rounded-circle
rounded-0 (无圆角)
rounded-t, rounded-r, rounded-b, rounded-l (单边圆角)
阴影
elevation-0 到 elevation-24
过渡
transition-fast-out-slow-in
transition-linear-out-slow-in
transition-fast-out-linear-in
transition-swing
响应式工具类
几乎所有工具类都可以添加断点前缀：
格式: {property}{direction}-{breakpoint}-{size}
断点:
sm - ≥600px
md - ≥960px
lg - ≥1264px
xl - ≥1904px


1. 悬停状态 (Hover)
格式
{property}--hover
常用悬停类
颜色变化:
html
<template>
  <v-btn class="primary--hover">悬停时变主色</v-btn>
  <div class="secondary--text text--hover">悬停时文本变次要色</div>
</template>
背景颜色:
html
<template>
  <div class="hoverable accent--hover">悬停时背景变强调色</div>
</template>
阴影提升:
html
<template>
  <v-card class="elevation-2 elevation-4--hover">悬停时阴影加深</v-card>
</template>
2. 聚焦状态 (Focus)
格式
{property}--focus
示例
html
<template>
  <v-text-field class="primary--focus" label="聚焦时边框变主色"></v-text-field>
  <v-btn class="accent--focus">聚焦时变强调色</v-btn>
</template>
3. 激活状态 (Active)
格式
{property}--active
示例
html
<template>
  <v-btn class="error--active">激活时变错误色</v-btn>
</template>
4. 禁用状态 (Disabled)
格式
{property}--disabled
示例
html
<template>
  <v-btn disabled class="primary--disabled">禁用状态</v-btn>
</template>
5. 组合使用
可以组合多个伪类状态：
html
<template>
  <v-btn class="primary--hover error--active">悬停主色/激活错误色</v-btn>
</template>
6. 自定义伪类样式
虽然 Vuetify 提供了内置的伪类工具，但有时需要自定义样式：
通过 SCSS 自定义
scss
.v-btn {
  &--custom-hover {
    &:hover {
      background-color: map-get($purple, lighten-2);
      transform: scale(1.05);
    }
  }
}
使用 Vuetify 的 v-hover 组件
<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :class="{ 'primary--text': hover }"
    >
      悬停效果
    </v-card>
  </v-hover>
</template>