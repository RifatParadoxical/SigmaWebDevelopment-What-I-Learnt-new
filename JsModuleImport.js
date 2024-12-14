// Importing of another file
import { name1, Person1 } from './JsModuleExport.js';
import { name2, Person2 } from './JsModuleExport.js';

console.log(name1); // "Resma"
console.log(Person1()); // "Hello, Resma!"
console.log(name2); // "Rifat"
console.log(Person2()); // "Hello, Rifat!"

/* 
 ## Importing a Default Export
     When importing, you can rename the default export to whatever you like
*/

import Person3 from './JsModuleExport.js';
console.log(Person3('Rifuuu')); // Output: Hello, Rifuuu!
