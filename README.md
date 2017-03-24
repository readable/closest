# Closest Polyfill

![IE-9+](https://img.shields.io/badge/IE-9%2B-green.svg)
![Firefox-34+](https://img.shields.io/badge/Firefox-34%2B-green.svg)
![chrome-34+](https://img.shields.io/badge/Chrome-34%2B-green.svg)
![Safari-8+](https://img.shields.io/badge/Safari-8%2B-green.svg)
![Opera-21+](https://img.shields.io/badge/Opera-21%2B-green.svg)

Simpler and faster  [`Element.closest`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) polyfill that relies on [`Element.matches`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) instead of falling back to [`document.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) (like [suggested on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill)) or some other selector match implementation.

The tradeoff is no support for ancient browsers.

## Install
``` sh
npm install --save @readable/closest
```

``` html
<script src="node_modules/@readable/closest/closest.js"></script>
```
