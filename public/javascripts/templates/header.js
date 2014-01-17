<nav>
  <div id="nav-links">
    <%= jetfuelexpress.current_user ?
    "Hello, " + jetfuelexpress.current_user.username + " <a href='#' id='feed-link'>My Links</a> <a href='/logout' id='logout-link'> Log Out</a>" :
    "Hello, Guest! <a href='/signup' id='signup-link'>Sign Up</a> <a href='/login' id='login-link'>Log In</a>"
     %>
  </div>
  <div class="container">
    <a href="#" class="brand"><%= title %></a>
  </div>
</nav>

<section class="container" id="header-section">

  <div id="header-message">
  </div>


  <form id="addUrl" action="#">
    <input id="originalUrl" type="text" placeholder="Paste your link" required />
    <button class="btn btn-gold" id="submit-button">Shorten</button>
  </form>

</section>