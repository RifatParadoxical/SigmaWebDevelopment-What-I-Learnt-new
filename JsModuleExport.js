//In-line export Iindividually
export const name1 = "Rifat"; 
export function Person1() { 
  return `Hello, ${name1}!`;
}


// Export all at once at the buttom
const name2 = "Resma";
function Person2() {
  return `Hello, ${name2}!`;    
}

// Export them all at once
export { name2, Person2};




/* 
## Default export

    Default exports let you export a single, primary thing from a file.
    no need to name the thing of exporting.Only one default export is allowed per file.
*/

export default function Person3(name) {
    return `Hello, ${name}!`;
  }
  