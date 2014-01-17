<article id="signup-article">
  <h2>Sign Up For JetFuelExpress</h2>
  <form action="/api/users/" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <label>Email:</label>
        <input type="text" name="email"/>
    </div>
    <div>
        <input type="submit" class="btn btn-small btn-warning" value="Create User"/>
    </div>
  </form>
</article>