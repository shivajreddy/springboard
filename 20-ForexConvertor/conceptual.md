### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
- Python is compiled and JS is runtime language. Python is Object-Oriented from ground up, JS initially was not but later adding 'call-stack' it kind of performs
- like an Object-Oriented,

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

- What is a unit test?


- What is an integration test?

- What is the role of web application framework, like Flask?

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

- How do you collect data from a URL placeholder parameter using Flask?

- How do you collect data from the query string using Flask?

- How do you collect data from the body of the request using Flask?

- What is a cookie and what kinds of things are they commonly used for?

- What is the session object in Flask?

- What does Flask's `jsonify()` do?
- It wraps up the inputs into a JSON object, everything is transformed into JSON expect python's sets. It sends a response header with content-type of JSON, not text/html.
