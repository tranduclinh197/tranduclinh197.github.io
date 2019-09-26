---
layout: post
title:  "Một số thủ thuật CSS mà Front.End không ngờ tới (P1)"
date:   2019-09-26 10:31:04 +0700
categories: thu-thuat-css-p1
author: Trần Đức Lĩnh
tag: ["frontend", "css"]
img-title: /assets/img/blog12.jpg
permalink: /mot-so-thu-thuat-css-p1.html
---

CSS có thể học trong vòng 2-3 tháng, nhưng muốn giỏi thì đó là một chặng đường.<br/>

![image-title-here](/assets/img/img-post/know-css/know-css.jpg){:width="100%"}

Mình tổng hợp lại từ các trang *viblo.asia* - *kipalog* và giải thích lại rõ hơn.<br/>
<small>*Mạo hiểm viết thẳng html - css(thuần) trên .md, khi bảo trì code chắc sẽ gặp chút khó khăn đây =))*</small>

### 1) style="border-radius:...;"

Nếu để ý kỹ thì trên các trang *Facebook* có những *button* được bo tròn 2 bên, vậy làm như thế nào để được như vậy? <br/>
Bạn muốn dùng **border-radius:50%???.** Không được đâu, trừ khi *width = height* may ra nó là hình tròn, số còn lại là dạng ellipse mà thôi.

<!-- max-width and max-height == 450px -->
<div class="jxgbox jxgControll_embed">
    <div style="
    display: block;
    margin: 0 auto;
    position: relative;
    top: 30%;
    width: 250px;
    height: 40px;
    background: linear-gradient(to right, #f6ea41, #f048c6);
    border: 1px solid #c1c1c1;
    border-radius: 50% 50%;
    box-shadow: 2px 2px 20px #a8a8a8;
    "></div>
    <div style="
    display: block;
    margin: 0 auto;
    position: relative;
    top: 60%;
    width: 250px;
    height: 40px;
    background: linear-gradient(to right, #b51f1a, #f98af6);    
    border: 1px solid #c1c1c1;
    border-radius: 999px;
    box-shadow: 20px 20px 30px #a8a8a8;
    "></div>
</div>

Như trên, nếu chiều dài (height) = 40px thì thiết lập giá trị bằng **height/2 = 20px** hoặc **height = 40px** có lẽ tạm thời sẽ đúng.<br/>
Nhưng tăng lên 100px mọi lập luận phía trên đều sai.<br/>

Theo [nguồn](https://stackoverflow.com/questions/29966499/border-radius-in-percentage-and-pixels-px-or-em) stackoverflow có giải thích thì **border-radius** có 2 giá trị X và Y nằm trên trục tạo nên hình ellipse và xác định hình dạng của góc.<br/>
Nếu bặn đặt 1 giá trị duy nhất thì được áp dụng cho tất cả các góc **border-radius: x** == **border-radius: x/x**.<br/>
Thay vì sử dụng giá trị tương đối **%**, ta nên dùng 1 giá trị tuyệt đối như **px**. Khi bạn sử dụng *999px* bán kính đường tròn chắc chắn là 999px, quy tắc đặt ra được áp dụng sẽ là **các đường cong chồng lên nhau sẽ làm giảm bán kính của vòng tròn xuống 1/2 kích thước của cạnh nhỏ nhất**. Bạn có thể xem hình ảnh bên dưới.

<div class="jxgbox jxgControll_embed">
    <div style="
    display: block;
    margin: 0 auto;
    position: relative;
    top: 35%;
    width: 300px;
    height: 120px;
    background: linear-gradient(to right, #00b7ff, #a890fe);
    box-shadow: 20px 20px 30px #a8a8a8;    
    border-radius: 999px;
    ">
        <div style="
        display: inline-block;
        width: 120px;
        height: 120px;
        border: 2px solid yellow;
        border-radius: 50%;
        float: left;
        "></div>
        <div style="
        display: inline-block;
        width: 120px;
        height: 120px;
        border: 2px solid yellow;
        border-radius: 50%;
        float: right;"></div>
    </div>
</div>

Code mẫu.

```css
.br-radius{
    display: block;
    margin: 0 auto;
    position: relative;
    top: 35%;
    width: 300px;
    height: 120px;
    background: linear-gradient(to right, #00b7ff, #a890fe);
    box-shadow: 20px 20px 30px #a8a8a8;    
    border-radius: 999px;
}
```