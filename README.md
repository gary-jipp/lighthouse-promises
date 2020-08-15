# lighthouse-promises

- promise chaining is based on the 'magic' of what `then` returns

- if you return another Promise, it gets handled by the next `then`

- if you return *anything*, it still gets handled by the next `then`

- if you return *nothing*, that *still* is available to the next `then`

- really??

- `then` and `catch` always return a Promise

- so *whatever* is returned from a `then` (or a `catch`) is handled by the next `then` as another `Promise`.  If it was a 'value', then the Promise is always resolved.  If it was a Promise, then that Promise can resolve or reject as usual.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Chaining