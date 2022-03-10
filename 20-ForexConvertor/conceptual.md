### Conceptual Exercise

Answer the following questions below:
### What are important differences between Python and JavaScript?
- Python is compiled and JS is runtime language. Python is Object-Oriented from ground up.
- JS initially was not but later with addition of 'call-stack' it kind of performs like an Object-Oriented.

### Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you can try to get a missing key (like "c") *without* your programming crashing.
```
if "c" in dict:
  print(f"c : {dict[c]}")
```
```
if "c" in dict.keys():
  print(f"c : {dict[c]}")
```

### What is a unit test?
- Testing your code by a technique, where tests are written for individual functions/modules.
- Basically to check individual functions, if they are run properly in all edge cases.


### What is an integration test?
- Integration testing is another technique of testing, that is used to test the reliability between modules.
- In other words, testing to see if the modules integrate with each other.
- Tests to check user-based-scenarios. A sequence of actions that a user can do, and do the modules integrate well, and result in correct output?


### What is the role of web application framework, like Flask?
- Flask is back-end python framework, used to write back-end application.
- Back-end application is used to design the routes of the web application, what should the application respond with when user visits a route.
- Communicates with the Database's to gather data upon requests, and responds to the front-end with that data.
- Designing the configurations of the web-application.


### You can pass information to Flask either as a parameter in a route URL (like '/foods/pretzel') or using a URL query param (like 'foods?type=pretzel'). How might you choose which one is a better fit for an application?
- Both result in same result, but there are commonly followed standards for both the cases.
- Use URL paramaeter(a.k.a path parameters) that lead to a static resource. clean, minimal, SEO friendly.
- Use query parameters(a.k.a route paremeters) to show dynamic content in a static end point, that is usually not relevant to search engines.
- Example of home page of user with name user21 on reddit.
  - URL params to go to that user's account and displaying homepage content. -> reddit.com/user21/home
  - Query params to sort the posts by trending or category. -> reddit.com/user21/home?sort=trending


### How do you collect data from a URL placeholder parameter using Flask?
- request.args.get("argument_name")


### How do you collect data from the query string using Flask?
- request.args.get("argument_name")


### How do you collect data from the body of the request using Flask?
- request.form returns key:value pair in the body, from a HTML form
- request.files for files in the body 
- request.json for json data


### What is a cookie and what kinds of things are they commonly used for?
- cookies is a data, that is sent from the server along with the static resource, when the browser requests at a route.
- Browser renders the response page, and saves the cookie in the client computer. (can be accessed under dev-tools>>application)
- in flask you can set cookies using ***set_cookie(key, value="", max_age=None)***
- in flask you can get cookies using ***request.cookies.get('key21')***


### What is the session object in Flask?
- Session is implemented on top of cookies. Session allows to save data that is specific to a user, from one request to next. session signs the cookie data cryptographically. The user now can see the cookies but they will be gibberish like a hex token, but the secret on the server side is used to modify these cookie data.


### What does Flask's `jsonify()` do?
- It wraps up the inputs into a JSON object, everything is transformed into JSON expect python's sets. It sends a response header with content-type of JSON, not text/html.
