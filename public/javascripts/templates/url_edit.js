<article id="editArticle">
  <fieldset>
    <form class="editUrl" action="#">
      <label for="newOriginal">Original Url: </label>
      <input id="newOriginal" type="text" value=<%= "originalUrl" %> />
      <label for="newSlug">Shortlink</label>
      <input id="newSlug" type="text" value=<%= "slug" %> />
      <label for="active">Active?</label>
      <input id="active" type="text" value="true"/>
      <br/>
      <br/>
      <button class="btn btn-small btn-warning save">Save</button>
      <button class="btn btn-small btn-warning cancel">Cancel</button>
    </form>
  </fieldset>
</article>