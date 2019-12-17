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

Những kỹ thuật rút gọn code được áp dụng rất nhiều, mục đích sử dụng kỹ thuật này có thể kể đến việc bảo trì code, nâng cấp, sửa lỗi và nhìn trông sạch hơn. Những dự án lớn và phức tạp đòi hỏi phải tập hợp nhiều người xử lý chung một vấn đề, một tình huấn, và mọi người đều viết mã nguồn theo một quy ước cụ thể. Muốn học hỏi được những kỹ thuật này, ít nhất bạn phải nắm vững các kiến thức cơ bản về một ngôn ngữ nào đó.

#### 1) Toán tử 3 ngôi (Ternary Operator)

```js
    const x = 1000;
    if (x < 1000)
        console.log("true");
    else
        console.log("false");

    // true
```

Rút gọn thành.

```js
    const x = 1000;
    (x < 1000) ? console.log("true") : console.log("false");
    // false
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

### 3) Khai báo biến
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

```js
    var a = true;
    if (a == true) {
        console.log("hello");
        // hello
    }
```

Rút gọn thành.

```js
    var a = true;
    if(a) {
        console.log("hello");
        // hello
    }
```

*Nếu trong trường hợp muốn lấy giá trị* **false**.

```js
    var a = true;
    if(!a) {
        console.log("hello");
        // false
    }
```

### 5) Vòng lặp `for`
Nếu bạn đang sử dụng `JavaScript` thuần mà không phụh thuộc vào thư viện thứ ba như: *jQuery* hoặc *Lodash*.

```js
    const arr = [1,2,3,4];
    for (let i = 0; i < arr.length; i++) {
        console.log( arr[i] );
        // 1, 2, 3, 4
    }
```

Rút gọn thành.

```js
    const arr = [1,2,3,4];
    for (let i in arr) {
        console.log( arr[i] );
        // 1, 2, 3, 4
    }
```
<small>`for in`<small>

### 6) Decimal base exponents
Khi biểu diễn số hàng triệu, có khi lên đến hàng tỉ, thay vì viết 1.`000`.`000`.`000`... Ta có thể viết thành kiểu số thực phẩy động (float type).

```js
    const a = 1000000000;
    console.log(a);
    // 1.000.000.000
```

Rút gọn thành

```js
    const a = 1e9;
    console.log(a);
    // 1.000.000.000
```

**Các gái trị biểu thức sau đều tương tự bao gồm:**
- 1e0 === 1;
- 1e1 === 10
- 1e2 === 100
- 1e3 === 1000
- 1e4 === 10000
- 1e5 === 100000
...