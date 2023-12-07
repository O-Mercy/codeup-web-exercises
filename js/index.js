'use strict'

import { getBookAndAuthor } from './books-api.js';

// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread
    const book = await getBookAndAuthor(1);
    console.log(book);
})();