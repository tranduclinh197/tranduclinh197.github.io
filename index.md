---
layout: home
title: Trang chủ
---
<div class="container bg-light container-border-radius py-3 px-4 my-lg-4 my-3">
    <div class="row">
        <div class="d-block mx-auto mb-2" style="margin-top: 5px">
            <div class="mx-2 text-center">
                <h3 class="">Cảm ơn bạn đã ghé thăm trang web của tớ.</h3>
                <h5>Mọi thứ sẽ có 1 vài thay đổi trong thời gian tới (08-2020).</h5>
            </div>
            <div class="text-center border p-4 shadow mb-4">
                <h4 class="text-danger">Trang web này sẽ không còn cập nhật nội dung từ ngày <strong>19-03-2020</strong>.</h4>
                <p>Truy cập đến <a href="https://dev-note.cf" target="_blank">dev-note.cf</a> để tìm kiếm "Know-how" cho chính bạn.</p>
            </div>
            <img src="/assets/img/city.png" alt="2020" width="100%" class="img-raised img-fluid container-border-radius">
            <hr/>
        </div>
    </div>
    <!-- 
     style="
            -webkit-filter: grayscale(100%);
            -moz-filter: grayscale(100%);
            -o-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            filter: grayscale(100%);
        "
     -->
    <div class="row posts">
        <div class="card-columns col-md-12">
            {% for post in site.posts %}
            <!-- 
            style="
                        -webkit-filter: blur(2px);
                        -moz-filter: blur(2px);
                        -o-filter: blur(2px);
                        -ms-filter: blur(2px);
                        filter: blur(2px);
                    "
             -->
                <div class="card shadow-sm mt-5">
                    <div class="card-header bg-transparent border-0" style="margin-bottom: -44px;">
                        <a href="{{ post.url | prepend: site.baseurl }}">
                            <img title="{{ post.title }}" class="card-position img container-border-radius shadow hover-img" src="{{ post.img-title }}" width="100%">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="text-center"><a title="{{ post.title }}" href="{{ post.url }}">{{ post.title }}</a></h5>
                        {% if post.tag != null %}
                            <ul class="">
                                <i class="fas fa-tags font-weight-light mr-lg-1">
                                    {% for multi-tag in post.tag %}
                                        <a class="post text-center" href="/{{multi-tag}}">
                                            <span>
                                                <small>
                                                    #{{multi-tag}}
                                                </small>
                                            </span>
                                        </a>
                                        {% unless forloop.last %}, {% endunless %}
                                    {% endfor %}
                                </i>
                            </ul>
                        {% endif %}
                        <p>
                            <small>
                                {{ post.excerpt }}
                            </small>
                        </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent d-flex justify-content-around">
                        <i class="fas fa-user-alt font-weight-light mr-lg-1">
                            <a href="#">
                                <span>
                                    <small>
                                        {{ post.author }}
                                    </small>
                                </span>
                            </a>
                        </i>
                        <i class="fas fa-clock font-weight-light mr-lg-1">
                            <a href="#">
                                <span>
                                    <small>
                                        {{ post.date | date_to_string }}
                                    </small>
                                </span>
                            </a>
                        </i>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div> 
