---
title: 'accessible links'
date: '2022-12-10'
---

Stolen from [cadars](https://github.com/cadars/john-doe/blob/main/style.css#L254), make hyperlinks accessible by being explicit, i.e., making it clear when the hyperlink is heading outside of the current domain:

```css
a[href*="//"]:after {
  /* top-right arrow (↗) */
  content: "\2197";
}
```
