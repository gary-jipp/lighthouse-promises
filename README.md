# lighthouse-promises

## Promise.all()

- sometimes we want to run several things at the same time

- `Promise.all()` takes a array of promises

- the promises all run at the same time, no dependancy

- when the last promise is done, the `then` fires

- if _any_ of the promises fail, they all fail with the `catch`

- if _all_ the promises succeed (resolve), we get back an array of results

- the results array order is exactly matches the order of the promises array

- there is also a `Promise.race()` which is similar, but ends when the _first_ promise resolves
