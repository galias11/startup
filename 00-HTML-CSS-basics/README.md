## How could you add weight to the global font definition to win over the classes added by point 3?

I could use something like this:
```
* {
	font-weight: bold;
}
```
I also could add !important to the end of property value (but it's not recommended as possible to use), like this:
```
html {
	font-weight: bold!important;
}
```
## Imagine there is a declaration like class=”oh-no-inline-styles” style=”background:red” and you need to change the background to green without changing the inline style. How could you accomplish this?

Inline styles always override styles written in css files, so here we can use !important:
```
oh-no-inline-styles {
	background: green!important;
}
```