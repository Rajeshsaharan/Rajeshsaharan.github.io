---
layout: page
permalink: /categories/sample
title: Categories
---



{% for post in site.categories.sample %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
