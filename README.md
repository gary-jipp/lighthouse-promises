# lighthouse-promises

 Promises
- why we prefer them to callbacks for chaining operations
- how and why we create them (rarely)
- how and when we use them (often!)
- using "finally"
- what a "return" from then() and catch() really does
	- Whatever is returned gets pushed onto the "then" stack 
	- The returned item does NOT have to be another Promise!
	- Can even be a value or undefined, and its still "thenable"
	- We can use this behavior for some cool tricks
- promiseAll() trick
- Remember what the return from a then or catch actually does