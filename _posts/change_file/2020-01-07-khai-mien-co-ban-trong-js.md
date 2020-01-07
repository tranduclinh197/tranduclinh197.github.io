---
layout: post
title: "Ôn lại khái niệm cơ bản trong JavaScript (P2)"
date: 2020-01-07 21:20:56 +0700
categories: frontend
author: Trần Đức Lĩnh
tag: frontend
img-title: /assets/img/blog21.jpg
permalink: /on-lai-khai-niem-co-ban-trong-javascript-p2
---

Trong phần [trước](/on-lai-khai-niem-co-ban-trong-javascript-p1) mình đã giới thiệu các khái niệm cơ bản nhất bao gồm *biến, vòng lặp, điều kiện, hàm,...* và nó được minh hoạ bằng ngôn ngữ **JavaScript**. Trong bài tiếp theo, mình muốn tìm hiểu sâu hơn để nắm bắt các khái niệm nền tảng.

<small>You don’t know JS</small>

Có vài kiến thức mới mẻ và hữu ích mà trước đây chưa được nhắc đến. Và đây là những kiến thức nền giúp cho những **DEV** có thể tiến xa hơn.

### Values & Types

Có một số *type* có sẵn trong JS:
- string
- number
- boolean
- null
- underfined
- NaN
- object
- symbol (ES6) 

JS cung cấp cho chúng ta một hàm để kiểm tra kiểu dữ liệu thông qua cú pháp **typeod**.

```js
    var a = 0;
    typeof a;
    // "number"
```

**Thú vị**<br/>
Giá trị *null* sẽ trả về kiểu dữ liệu *object* trong khi bạn mong muốn nó trả về kiểu dữ liệu **null** như các kiểu dữ liệu khác.

```js
    var a = null;
    typeof a;
    // "object"
```

Cũng lưu ý rằng nếu bạn gán biến là **undefined** và khai báo biến **không có giá trị** đều cho ra kết quả là ***undefined***.

```js
    var a;
    typeof a;
    // "undefined"
    var b = undefined;
    typeof b;
    // "undefined"
```

#### Object

Một object (đối tượng) trong JS là một kiểu dữ liệu phức tạp, nó cho phép chúng ta cài đặt nhiều giá trị thông qua **PROPERTIES**.

```js
    var obj = {
        a: "hello world",
        b: 197,
    };

    console.log(obj.a);
    // "hello world"
    console.log(obj["b"]);
    // 197
```

**PROPERTIES** được truy xuất bằng cách *not notation {console.log(obj.a);}* hoặc *bracket notation {console.log(obj["b"]);}*. Cách dùng thứ nhất có vẻ ngắn gọn hơn nhưng trong một số trương hợp cách dùng thứ hai lại tiện lợi hơn rất nhiều.

```js
    var obj = {
        a: "hello world",
        b: 197
    };

    var b = "a";

    console.log(obj[b]);
    // OBJ[B]
    // "hello world
    console.log(obj["b"]);
    // 197
```

Có một số kiểu dữ liệu thường dùng trong **JS** bao gồm *Array* và *Function*. Chúng là những kiểu dữ liệu con của **Object**.

#### Array

Một *mảng* là một đối tượng chứa các giá trị không dùng đến *key/values*, mà chỉ dùng đến chỉ số *index* để truy cập đến các phân tử.

```js
    var arr = [
        "hello wolrd",
        197
    ];

    console.log(arr[0]);
    // "hello world"
    console.log(arr[1]);
    // 197
    typeof arr;
    // "object"
```

Lưu ý rằng **chỉ số index được bắt đầu từ 0**.

#### Functions

Là một dạng đặc biệt của **object**.

```js
    function func() {
        return 197;
    };

    func.bar = "hello world";

    typeof func;
    // "function"
    typeof func();
    // "number"
    typeof func.bar;
    // "string"
```