---
layout: page
---



<article>
	<h2 id="{{ this_word }}" class="tag-heading">{{ this_word }}</h2>
		<ul id="archive">
   
for post in site.posts 
if post.categories contains 'sample'
      <li class="archiveposturl"><span><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></span><br/>
<span style="font-size:85%"><strong>Author:</strong> {{post.author}}</span></li>
    endfor
   endif 
		</ul>
	</article>

