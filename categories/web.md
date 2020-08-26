---
layout: page
permalink: /categories/web
title: Categories
---



{% for post in site.categories.web %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
