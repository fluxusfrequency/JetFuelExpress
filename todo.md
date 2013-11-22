mongo jetfuelexpress_test --eval 'db.dropDatabase();'

X Fix server tests by using .last or createdDate









- Split urls off into their own model
  - Test them with Jasmine
  - Needs original, slug, active, visits, createdDate, userID
  - Remove unneeded attrs 
  - Give them validations for presence and length
  - regex for link to be a valid web address
  - Split them off into a file


- Use Zombie to test the view behavior currently
  - Bind the shorten button on the index page to create another url immediately
    -Test the backbone view with Jasmine?

  - Make sure the logo link works
  - Make sure the delete button works
  - Make sure the newest link shows up highest

  - Add behavior to make the links sort by number of times visited
    - Test the view shows the highest viewed link first
    - Test the attribute with Jasmine
    - Add the attribute (create a url with a superficially high visit count)
    - Test the comparator function for date
    - Test the comparator function for visit count
    - Implement sorting by both in the collection
    - Display the number of visits on the index view
    - Create sort by links in the index view for both sorting methods


- Add some padding to the links container
- Create an environment variable for the current host path and update the 
  associated links in the template

- Vanity strings
  - Write a zombie test for vanity strings
  - Write a Jasmine test to make sure a slug can be updated
  - Write a controller test to make sure the server can update records
  - Create a view to update slugs
  - Validate the slug isn't already in use
  - Verify the slug is saved correctly

- Create a user class
  - Test it
  - Build it modularly
  - Give it validations
  - Hook up User Id to the URLs

- Build authentication
  - Write a zombie test for authentication behavior
  - Write a test for sessions
    - Build sessions
  - Write a test for Encryption
    - Encrypt the users passwords
  - Create a sign up or sign in link
  - Create a sign in or sign up view
  - Test the route in backbone
  - Route the view in backbone

- Build authorization
  - Write a zombie test to make sure that a user can see his own shortened links
  - Allow a user to edit her urls
  - Authorize the delete button
  - Create inactive link
  - Create a user profile page

- Build statistics
  - Write a zombie test for the ability to view statistics (show page)
  - Write a Jasmine spec for the statistic helper
  - It should keep track of users whose links are most clicked.
  - It should keep track of who has clicked each link.
  - It should keep track of when the link was clicked.
  - Create a statistics helper class
  - Create a show view for shortened urls.


- Look at traffic spy and see if it can be integrated
- Modularize the handlebars templates
