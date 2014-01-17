describe("HeaderView", function() {
  before(function() {
    // $('<section id="main"></section>').appendTo('#fixtures')
    // view = new jetfuelexpress.HeadView()
    // view.render().appendTo('#fixtures')
    // setup a fake xhr for when the form is submitted
    // make the ajax request return a mock response...like:
    // {shortened: 'http://localhost:3000/jq4884'}
  })

  after(function() {
    // $('#fixtures').empty()
  })

  it('adds a url', function() {
    $('#originalUrl').val('http://google.com')
    $('#submit-button').click()

    expect(window.location.pathname).toBe('/shorten')

    expect($('.urls-container:contains("http://google.com")').length).toBe(1)

    expect($('.url-conatiner a[href="http://localhost:3000/jq4884"]').length).toBe(1)

  })
});
