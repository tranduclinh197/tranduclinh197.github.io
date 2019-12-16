---
layout: post
title: "Kỹ thuật rút gọn code trong JavaScript"
date: 2019-12-16 17:00:00 +0700
categories: frontend
author: Trần Đức Lĩnh
tag: frontend
img-title: /assets/img/blog19.jpg
permalink: /ky-thuat-rut-gon-code-trong-javascript
---

### Tổng hợp kỹ thuật rút gọn code JavaScript.

#### 1) Toán tử 3 ngôi (Ternary Operator).

```js
    const x = 1000;
    if (x < 1000)
        console.log("true");
    else
        console.log("false");
```

Rút gọn thành.

```js
    const x = 1000;
    (x < 1000) ? console.log("true") : console.log("false");
```

### 2) Shorthand Evaluate
Khi gán giá trị của biến này cho biến khác, ta muốn đảm bảo biến đó không có các giá trị bao gồm `null`, `undefinded` hoặc `space`. Muốn biết điều đó ta cần viết một lệnh kiểm tra.

```js
    let b;
    if (a !== null || a !== undefined || a !== '') {
        b = a;
    }
    else {
        b = "";
    }
```

Rút gọn thành.

```js
    const b = a || "";
```

Xem ví dụ.

```js
    let a = null;
    let b = a  || '';
    console.log(b);
    //output: '' (an empty string)

    let a = undefined;
    let b = a  || '';
    console.log(b);
    //output: '' (an empty string)

    let a = "Hello world";
    let b = a  || '';
    console.log(b);
```

### 3) Khai báo biến.
Việc khai báo biến tốt nhất là khi bắt đầu khai báo một function.

```js
    let a;
    let b;
    let c = 100;
```

Rút gọn thành.

```js
    let a, b, c = 100;
```

### 4) Loại bỏ toán tử so sánh `bằng` trong *if*
Khi điều kiện so sánh bằng, trong trường hợp biến đã được `định nghĩa trước và quy ước kiểu boolean`, ta có thể bỏ qua toán tử so sánh `==` hoặc `===`.