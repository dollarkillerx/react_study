# CSS3

## 选择器
- 多元素选择器   `.a,.b`
- 后代元素选择器 `.c .d`
- 子元素选择器   `div>p` 
- 兄弟元素选择器 `div+p`
- 同级元素选择器 `.a~.p`
- 伪类选择器
	-  `li:nth-child(5)`
	-  `li:last-child`
	-  `li:firset-child`
	-  `li:hover`
- 属性选择器
	- `input[type="password"]`
	- `button[disabled="disabled"]`

## 浮动
```css
/* #desk::after{
	content: '';
	display: block;
	clear: both;
} */

#desk > span {
	display: block;
	clear: both;
}
```

## 定位
![](./s1.jpg)

![](./s2.jpg)

demo7
![demo7](./s3.jpg)

demo8
(如果上级元素有相对定位的 就会更具上级元素定位 反之更具更元素定位)
![demo8](./s4.jpg)  

demo9
![demo9](./s5.jpg)

demo10
![demo10](./s6.jpg)

## 过渡动画
demo 11
```
div {
	transition: all 1s;
}

div::hover {
	width: 600px;
}
```

## Size
- `100%` 父元素的100%
- `vh vw` 把整个屏幕分成100份
	- `100vh` 高度整个屏幕大小
	- `100vw` 宽度
