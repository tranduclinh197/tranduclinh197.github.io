---
layout: home
title: Trang chủ
---
<div class="container bg-light container-border-radius py-3 px-4 my-lg-4 my-3">
    <div class="posts">
        <div class="card-columns col-md-12 ">
            {% for post in site.posts %}
                <div class="card shadow-sm mt-5">
                    <div class="card-header bg-transparent border-0" style="margin-bottom: -44px;">
                        <a href="{{ post.url | prepend: site.baseurl }}">
                            <img title="{{ post.title }}" class="card-position img container-border-radius shadow hover-img" src="{{ post.img-title }}" width="100%">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="text-center"><a title="{{ post.title }}" href="{{ post.url }}">{{ post.title }}</a></h5>
                        {% if post.tag != null %}
                            <i class="fas fa-tags font-weight-light mr-lg-1">
                                {% for multi-tag in post.tag %}
                                    <a class="post" href="/tag/{{multi-tag}}">
                                        <span>
                                            <small>
                                                #{{multi-tag}}
                                            </small>
                                        </span>
                                    </a>
                                    {% unless forloop.last %}, {% endunless %}
                                {% endfor %}
                            </i>
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
