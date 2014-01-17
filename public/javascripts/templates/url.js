<article>
  <h4><a href="http://<%= originalUrl %>/"><%= originalUrl %></a></h4>
  <h5><a href="/<%= slug %>"><%= "ShortLink: http://jfx.herokuapp.com/" + slug %></a></h5>
  <p class="view-stats">Views: <%= visits %>  |
  Date Created: <%= createdDate %>  |
  <%= active ? "Active" : "Deactivated" %>
  </p>
  <button class="btn btn-small btn-warning edit">Edit</button>
  <button class="btn btn-small btn-warning delete">Delete</button>
</article>