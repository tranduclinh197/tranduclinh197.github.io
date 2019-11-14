---
layout: categories
title: Thuật toán
permalink: /algorithm
--- 
<div class="container bg-light container-border-radius py-3 px-4 my-lg-4 my-3">
    <div class="posts">
        <div class="text-center">
            <div class="text-center shadow container-border-radius p-3" style="display: inline-block">
                <h3 class="text-uppercase ">{{ page.title }}</h3>
            </div>
        </div>
        <div class="card-columns col-md-12 ">
            {% for algorithm in site.categories.algorithm %}
                <div class="card shadow-sm mt-5">
                    <div class="card-header bg-transparent border-0" style="margin-bottom: -44px;">
                        <a href="{{ algorithm.url | prepend: site.baseurl }}">
                            <img title="{{ algorithm.title }}" class="card-position img container-border-radius shadow hover-img" src="{{ algorithm.img-title }}" width="100%">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="text-center"><a title="{{ algorithm.title }}" href="{{ algorithm.url }}">{{ algorithm.title }}</a></h5>
                        {% if algorithm.tag != null %}
                            <i class="fas fa-tags font-weight-light mr-lg-1">
                                {% for multi-tag in algorithm.tag %}
                                    <a class="post" href="/{{multi-tag}}">
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
                                {{ algorithm.excerpt }}
                            </small>
                        </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent d-flex justify-content-around">
                        <i class="fas fa-user-alt font-weight-light mr-lg-1">
                            <a href="#">
                                <span>
                                    <small>
                                        {{ algorithm.author }}
                                    </small>
                                </span>
                            </a>
                        </i>
                        <i class="fas fa-clock font-weight-light mr-lg-1">
                            <a href="#">
                                <span>
                                    <small>
                                        {{ algorithm.date | date_to_string }}
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
