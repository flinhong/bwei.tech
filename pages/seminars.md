---
layout: page
title: 学术报告
description: 学而时习之，不亦悦乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？
permalink: /seminars/
---

{% for seminar in site.seminars %}
<p><a href="{{ seminar.url }}">{{ seminar.date | date: "%F" }} | {{ seminar.title }}</a></p>
{% endfor %}