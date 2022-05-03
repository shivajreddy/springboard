# Broken App Issues

### 1. Not catching the error that is being thrown.

### 2. The request being sent to all the usernames is being mapped to 'results'
### but 2nd mapper is not waiting until all the promises are resolved.

### 3. changed the variable names from the following left to righ:
#### result -> devs
#### devs mapping item d -> name
#### out -> result

### 4. no global error handler. Used the custom ExpressError object to throw wrong inputs.
