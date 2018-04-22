---
layout: page
title: 新闻中心
description: 日新月异
permalink: /news/
---

{% for news in site.news %}
<p><a href="{{ news.url }}">{{ news.date | date: "%F" }} | {{ news.title }}</a></p>
{% endfor %}