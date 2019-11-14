---
layout: categories
title: Bạn có biết ?
permalink: /let-is-go
--- 
<div class="container bg-light container-border-radius py-3 px-4 my-lg-4 my-3">
    <div class="posts">
        <div class="text-center">
            <div class="text-center shadow container-border-radius p-3" style="display: inline-block">
                <h3 class="text-uppercase ">{{ page.title }}</h3>
            </div>
        </div>
        <div class="card-columns col-md-12 ">
            {% for let-is-go in site.categories.let-is-go %}
                <div class="card shadow-sm mt-5">
                    <div class="card-header bg-transparent border-0" style="margin-bottom: -44px;">
                        <a href="{{ let-is-go.url | prepend: site.baseurl }}">
                            <img title="{{ let-is-go.title }}" class="card-position img container-border-radius shadow hover-img" src="{{ let-is-go.img-title }}" width="100%">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="text-center"><a title="{{ let-is-go.title }}" href="{{ let-is-go.url }}">{{ let-is-go.title }}</a></h5>
                        {% if let-is-go.tag != null %}
                            <i class="fas fa-tags font-weight-light mr-lg-1">
                                {% for multi-tag in let-is-go.tag %}
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
                                {{ let-is-go.excerpt }}
                            </small>
                        </p>
                    </div>
                    <div class="card-footer border-0 bg-transparent d-flex justify-content-around">
                        <i class="fas fa-user-alt font-weight-light mr-lg-1">
                            <a href="#">
                                <span>
                                    <small>
                                        {{ let-is-go.author }}
                                    </small>
                                </span>
                            </a>
                        </i>
                        <i class="fas fa-clock font-weight-light mr-lg-1">
                            <a href="#">
                                <span>
                                    <small>
                                        {{ let-is-go.date | date_to_string }}
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
