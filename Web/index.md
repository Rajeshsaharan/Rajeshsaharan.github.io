---
layout: back
pagename: blog
title: Langr Software Solutions | Jeff's Blog
description:
  Blog posts of Langr Software Solutions
keywords:
  custom software development, 
  Test Driven Development,
  TDD,
  software development mentoring,
  software development training,
  software development pairing,
  legacy code rescue,
  development process,
  Behavior Driven Development,
  BDD strategy,
  distributed development team
pre-content: >
  <div id="header-img">
    <div class="grid">
      <div class="content">
        <picture>
          <source srcset='/assets/images/banner/langr-software-solutions-services.png' media='(max-width: 1200px)'>
          <source srcset='/assets/images/banner/langr-software-solutions-services.png' media='(min-width: 1050px)'>
          <source srcset='/assets/images/banner/langr-software-solutions-services.png' media='(min-width: 750px)'>
          <img src='/assets/images/banner/langr-software-solutions-services.png' alt='Langr Software Solutions offers
          software services.'>
        </picture>
      </div>
    </div>
  </div>
post-content:
backsite: javascript:history.back()
---
Our blog focuses on numerous topics, including distributed / remote development, teams, programming, Test Driven Development (TDD), mentoring, training, pairing, legacy code rescue, agile & other processes, and Behavior Driven Development (BDD). Expand the Categories section to select all blog entries within a category.

#### Categories

<script type="text/javascript">
  function filterUsingCategory(selectedCategory) {
    var id = 0;
    {% for post in site.posts %}
      var cats = {{ post.categories | jsonify }}

      var postDiv = document.getElementById(++id);
      postDiv.style.display = (selectedCategory == 'All' || cats.includes(selectedCategory)) 
        ? 'unset' 
        : 'none';
    {% endfor %}
  }
</script>

<div>
  <button id="All" onclick="filterUsingCategory('All')">*Show All Posts*</button>
  {% assign categories = site.categories | sort %}
  {% for category in categories %}
    {% assign cat = category | first %}
    <button id="{{ cat }}" onclick="filterUsingCategory(this.id)">{{ cat }}</button>
  {% endfor %}
  <hr />
</div>

<div class="posts-wrapper">
  {% assign id = 0 %}
  {% for post in site.posts %}
    {% assign id = id | plus:1 %}
    <div class="post" id="{{id}}">
      <p class="itemInteriorSection">
        <a href="{{post.url}}">{{ post.articletitle }}</a><br />
          {% if post.author != "Jeff Langr" %}by {{ post.author }}{% endif %}
          <span><b>&middot;</b></span>
          {{ post.date | date: "%B %d, %Y" }}
   
          {% assign stringToCheck = ' ' %}
          {% assign checkArray = post.ncomments | split:stringToCheck %}
          {% unless checkArray[0] == '0' %}
            <span><b>&middot;</b></span>
            {{ post.ncomments }}
          {% endunless %}
      </p>
    </div>
  {% endfor %}
</div>
