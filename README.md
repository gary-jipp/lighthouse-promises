# lighthouse-promises

## Catching Promise.all()

- sometimes you want to *not* stop if one of the promises rejects

- knowing how 'return from a catch' works, we can do this

- we pre-catch each promise.  Now that promise can *only* fire a `then` or `finally`

- but maybe something else will trigger `catch`.  not a bad idea to keep it

- you may not always need this, but good to know you can