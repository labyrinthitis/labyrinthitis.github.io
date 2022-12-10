---
title: 'accessible links'
date: '2022-12-10'
---

Stolen from [cadars](https://github.com/cadars/john-doe/blob/main/style.css#L254), make your hyperlinks accessible by being explicit, i.e., making it clear when the hyperlink is directing you outside of the domain:

```css
a[href*="//"]:after {
  /* top right arrow: ↗ */
  content: "\2197";
}
```
