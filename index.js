/*
MANDATORY JS EXERCISES (create a different file for this exercise)
   ]
    
   
*/
// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"

let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

//2) Create an unordered list using JavaScript and save it in a variable



function unorderedList() {
    let bandMembers = document.createElement("ul");
}

//3) Cycle the array and create a list-item via JavaScript for every element
//4) Insert the genere as text in the list-item
//5) Append the list items in the unordered list
//6) Append the unordered list in the document. The list should appear in the page.


for (let i = 0; i < genres.length; i++) {
    let li = document.createElement("li")
    li.innerText = genres[i]
    ul.appendChild(li)
    document.body.appendChild(ul)
}

// <!-- MANDATORY JS EXERCISES (continue from yesterday's file for this exercise)


//     3) Grab the inputs references via DOM manipulation and save them in variables
//     4) Create a function and attach it to the "Apply Colors" button click event
function
//     5) Cycle listItems inside the function. Verify that the function and the loop work by logging in the console 
//         each item from the loop every time the button gets clicked
//     6) Move the inputs references in the function. Use the first input value as background-color for the item, and the second one for the text color.

//     If you receive black as a color check where you have the inputs references.
//     You should now see the list-items color and background-color change at the click of the button.
// -->


//     1) Create two inputs for picking up colors in the page, and a button with "Apply Colors" as text

//     2) Grab all <li> in the page from the DOM, and save them in a variable called "listItems"

let listItems = document.querySelector("li")
