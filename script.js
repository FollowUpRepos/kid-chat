/**
 * script.js
 */

const select = document.getElementsByTagName("select")[0]
console.log("select:", select);
// document.getElementsByTagName() creates a "collection" of
// HTML elements which share the given tag name. In this case,
// the collection will include all the `<select>` elements on
// the page. (There is only one.)

// [0] is how you ask for the 0th (first) item in a collection.
// JavaScript starts counting from zero. You can think of this as
// meaning "When there are zero elements behind, what is the next
// element in front?"


const button = document.getElementsByTagName("button")[0]
console.log("button:", button);
// You can create a "snippet" to generate chunks of code that you
// use regularly. I created the line above by typing:
//   clog + TAB + button
// https://code.visualstudio.com/docs/editor/userdefinedsnippets
// If you press F1 on your keyboard (or perhaps Fn + F1), or
// Ctrl-P, the Command Palette ("p" for Palette) will open.
// * Start typing ">snippet"
// * Choose "Snippets: Configure User Snippets"
// * Start typing "javascript"
// * Choose "javascript.json (JavaScript"
//   A new VS Code window will open.
// * Copy the example in lines 7 to 14 and paste it in a new line
//   before the closing "}" character.
// * Uncomment the lines that you have just pasted.
// * Save the file
// In any JavaScript file, you can now type "log" and select the
// "Log output to console" entry in the contextual menu, to see
// `console.log('|') appear instead of the word "log".
// 
// For a more powerful snippet, you could use:
// "Log a named variable": {
//   "prefix": "clog",
//   "body": [
//     "console.log(\"${1:$TM_SELECTED_TEXT}:\", ${1:$TM_SELECTED_TEXT}$2);",
//     "$0"],
//   "description": "Log a named variable"
// }
//
// This allows you to type a variable name, select the variable
// name and type "clog" instead. When you press TAB, the whole
// snippet, with the variable name will magically reappear.
// Or you can simply type...
//    clog + TAB + <your variable name>
// to have the same effect.


const p = document.getElementsByTagName("p")[0]
console.log("p:", p);

// onclick is an "event handler". You can use it to tell
// the JavaScript engine what to do when a user clicks on the
// given element.
button.onclick = () => p.textContent = select.value
// In this case, it takes the "value" of the selected option of
// `<select>` element, and replaces the text inside the `<p>`
// element with this value.