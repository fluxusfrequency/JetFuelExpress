#Jet Fuel

get "/urls/:shortened/?" do
   @url = Url.find_by_shortened(params[:shortened])
   @short_link = "#{request.base_url}/#{@url.shortened}"
   erb "urls/show".to_sym
 end





#Bit.ly

- Root: Just ads and an input form, plus sign in and sign up links. Footer for nav.
- Blank/nonlink form submit: sends you to '/shorten' with empty form
- Regular form submit: sends you to '/shorten' and populates a link list via ajax, with a copy button (uses flash to copy to clipboard). Ads below.
- Sign up screen - oAuth FB/Twitter OR signup form
- Sign in screen - oAuth FB/Twitter or login (or create new)

- Signed in root: 
navbar with your stuff: bitmarks, bundles, stats, gravatar account info dropdown
still has link form
search bar
shows past links as a feed
  -they can be archived or added to bundles
  -the url itself can be edited (ajax).
  -sort by date, title, clicks
ads on right

- Submitting a link when signed in
pops a modal with link, buttons to email or share, stats


ROUTES


Footer
'/pages/jobs'
'/pages/about'
blog.bitly.com
dev.bitly.com
FB link
Twitter link


When Not Logged In
'/' => Url#New
'/a/sign_up' => User#new
'/a/sign_in' => Session#new
'/a/support' => Contact#new


When Logged In
'/' => Index
'/bundles/' => Bundles#Index
'/a/stats' => Stats#Index
'/u/:user' => User#Show
'/u/:user/bundles' => UserBundles#Show
'/a/settings' => User#Edit
'/a/settings/password' (also saving, connect, advanced, labs) => User#Edit
'/a/tools' => Info#Index