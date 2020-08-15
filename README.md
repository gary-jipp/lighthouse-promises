# lighthouse-promises

- if you return another Promise, it gets handled ny the next `then`

- if you return *anything*, it still gets handled by the next `then`

- if you return *nothing*, that *still* is available to the next `then`

- really??

- whatever is returned from a `then` (or a `catch`) becomes the next `then`