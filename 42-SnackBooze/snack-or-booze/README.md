- The homepage should show the # of food items (“snacks”) and drink choices (“drinks”)

- The navbar should add a new link, “Drinks”, leading to a page listing the drinks — just like the “Snacks” link leads to a page listing food items.

- The drink listing page should show a list of drink choices, with each being a link to the details about the drink, just like for food items.

- However, you shouldn’t solve this by just cloning the FoodMenu and FoodItem components — you’d have so much duplicate code! Instead, turn these into generic components that can work with either food or drink lists/items.

- Now that you have more things on your menu, you should add a page that lets site users add either a drink or a snack.

- Design your app well. We don’t want to see poor names or see AJAX calls buried in your components. Use good design! Test whatever you can!

- Make sure you document your code appropriately. Srsly.

- Make sure you handle not-found pages — if a visitor tries to go to a link that doesn’t work, it should give a friendly 404-style message. If someone tries to go to a drink or food item that doesn’t exist, it should redirect to the drinks or food items listing page.

- The app does not need any kind of login or authentication; everyone can see everything and can add new items.
