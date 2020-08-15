# lighthouse-promises

### ** Open the Branches of this Project for all the code **
 
 ## Promises
- why we prefer them to callbacks for chaining operations
- how and why we create them (rarely)
- how and when we use them (often!)
- how we chain promises
- using "catch" and "finally"
- what a "return" from then() and catch() does
	- Returned item gets pushed onto the "then" stack as a new Promise
	- The returned item does NOT have to be another Promise!
	- Can even be a value or undefined, and its still "thenable"
	- We can use this behavior for some interesting tricks
- Promise.all() - you can still catch individual promises 
- Remember what the return from a then or catch actually does