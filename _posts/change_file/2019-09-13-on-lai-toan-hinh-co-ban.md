---
layout: post
title:  "Ôn lại hình học cơ bản (P1)"
date:   2019-09-13 09:02:04 +0700
categories: hinh-hoc-co-ban-p1
author: Trần Đức Lĩnh
tag: ["hinh-hoc", "math", "toan"]
img-title: /assets/img/blog4.jpg
permalink: /hinh-hoc-co-ban-p1.html
---
Một điều thú vị là khi bạn muốn tối ưu những `icon` trên website giúp việc load trang trở nên nhanh hơn, bạn phải biết về `SVG` và `<canvas>`.<br/>
Khác biệt lớn nhất khi thiết kế icon theo ý muốn ta phải sử dụng toạ độ để tính toán các điểm. Tất nhiên sẽ có những phần mềm hỗ trợ làm điều đó, nhưng mình khuyên các bạn nên biết chút ít về cách tạo `SVG`, `<canvas>` thủ công.



#### Cùng nhau ôn lại 1 chút kiến thức toán hình nào.
<hr/>
##### **Hình tam giác**

* Nếu ta có 1 điểm, tất nhiên sẽ vẽ được vô số tia, vô số đường thẳng.

<div id="point" class="jxgbox jsx_geometry"></div>

<!-- ![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/1-diem.png){:width="100%"} -->

<hr/>
* Nếu đi qua 2 điểm chỉ vẻ được duy nhất 1 đường thằng.

<div id="twoPoint" class="jxgbox jsx_geometry"></div>

<!-- ![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/duong-thang.png){:width="100%"} -->
<hr/>
* Nếu M nằm giữa A, B thì sẽ có vô số chỗ trên AB.
* M nằm giữa AB là `trung điểm` của AB.
* Đường `trung trực` của AB là đường thẳng đi qua `trung điểm` AB và vuông góc với AB.
* Những điểm nằm trên đường `trung trực luôn luôn` cách đều 2 đầu đoạn thẳng.

<div id="midPoint" class="jxgbox jsx_geometry"></div>

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/trung-truc.png){:width="100%"}
<hr/>

* 3 điểm nằm trên 1 đường thẳng thì 3 điểm đó thẳng hàng.

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/3-diem.png){:width="100%"}
<hr/>

* 3 điểm không nằm trên 1 đường thẳng thì sẽ tạo ra 1 hình `tam giác`.

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/tam-giac.png){:width="100%"}
<hr/>

* Các loại tam giác phổ biến

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/cac-loai-tam-giac.png){:width="100%"}
<hr/>

* Đường cao là đương hạ từ đỉnh vuông góc với cạnh đối diện.

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/duong-cao.png){:width="100%"}
<hr/>

**Pitago**
* *Bình phương cạnh huyền bằng tổng bình phương 2 cạnh gốc vuông* 

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/pitago.png){:width="100%"}

<hr/>

**Hệ thức lượng**
* `sinα = c/b`
* `cosα = a/b`
* `tanα = c/a`
* `cotα = a/c`

* *Bình phương 1 cạnh gốc vuông bằng tích hình chiếu nhân với cạnh huyền*
![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/binh-thuong-1-canh.png){:width="100%"}

<hr/>

* **Diện tích tam giác**
![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/dien-tich-1.png){:width="100%"}

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/dien-tich-2.png){:width="100%"}

* **Định lý hàm số (sin)**
    * `a/sinA = b/sinB = c/sinC = 2R`

* **Định lý hàm số (cos)**
    * `a^2 = b^2 + c^2 - 2bc . cosA`
    * `b^2 = a^2 + c^2 - 2ac . cosB`
    * `c^2 = a^2 + b^2 - 2ab . cosC`

* **Đường trung tuyến** là đường thẳng hạ từ đỉnh xuống trung điểm cạnh đối diện.

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/trung-tuyen.png){:width="100%"}
<hr/>
* **Trọng tâm** là giao nhau của 3 đường trung tuyến.
=> G là trọng tâm.<br/>
    * `AG = 2/3 AM`
    * `GM = 1/3 AM`
    * `AM = 1/3 GM`

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/trong-tam.png){:width="100%"}
<hr/>

* **Trực tâm** là giao nhau của 3 đường cao<br/>
=> H là trọng tâm

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/truc-tam.png){:width="100%"}
<hr/>
* **Tâm đường tròn ngoại tiếp** là giao nhau giữa 3 đường trung trực.<br/>
=> I là đường tròn ngoại tiếp tam giác ABC

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/tam-duong-tron-ngoai.png){:width="100%"}
<hr/>
* **Tâm đường tròn nội tiếp** là giao nhau giữa 3 đường phân giác.<br/>
=> I là đường tròn nội tiếp tam giác ABC

![image-title-here](/assets/img/img-post/toan-hinh-co-ban-p1/tam-duong-tron-noi.png){:width="100%"}

***

Những kiến thức về hình tam giác sẽ giúp bạn nhớ lại những gì đã quên, thay vào đó sẽ có những bài tập ứng dụng thực tế để các bạn hiểu rõ hơn về hình học quan trọng như thế nào khi đã là một *lập trình viên* nói chung và *front-end* nói riêng.