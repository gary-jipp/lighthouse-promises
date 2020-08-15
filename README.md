# lighthouse-promises

## Chaining Database calls

- sometimes you want to perform several database operations in order

- for `select` you can usually just `join` but `updates` may need more than one operation

- this is where promises become really useful

- can still save intermediate results in a object