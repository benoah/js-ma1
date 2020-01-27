// Module Assignment 1



/* Level 1
Question 1
Create an object called cat.

Give the object one property called complain.

 complain's value should be a method (a function) which logs the string 
 
 "Meow!".
 */
var cat = {
    complain:"mjau"


} ;

console.log(cat.complain);

// mjau 

 

/*    
Question 2
Select the h3 from the HTML below using the querySelector method and assign it to a variable called heading.
<h3>Subheading</h3>
*/

let heading = document.querySelector("h3")

/* 
Question 3
Use the style property on the heading variable from the question above to change its font size to "2em".
*/

heading.style.fontSize = '2em';



/* 
Question 4
Add a class to the heading variable called subheading.
*/

heading.classList.add("subheading");


/* 
Question 5
Write code that selects all the p elements on a page 
and assigns them to a variable called paragraphs.
*/

let paragraphs = document.querySelector("p");

/* 
Question 6
Select the div by its class from the HTML below, 
assign it to a variable called resultsContainer and 
set its inner HTML to be <p>New paragraph</p>.
*/


resultsContainer = "<p>New paragraph</p>."


/* 
Question 7
Create a function that has one argument called catArray.
Inside the function, loop through the catArray argument 
and console log the name property in each object.
Call the function and pass in the cats variable below.
*/


const cats = [{
    name: "Blob",
    age: 10,
},
{
    name: "Harold",
},
{
    name: "Blurt",
    age: 21
}
];

function catFunction(catArray) {
for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
}




};
// catFunction(cats);



/* 
Call the function from question 8, 
pass it the cats variable from question 7 and 
set the inner HTML of the resultsContainer 
variable from question 6 to the return value of the function.
*/


// catFunction(cats);


function catFunction(catArray) {
    let name = "";
    for (let i = 0; i < catArray.length; i++) {
        name += `<h5>${catArray[i].name}</h5>`;
    }

    return name;
}
catFunction(cats);

/* 
Question 9
Call the function from question 8, 
pass it the cats variable from question 7 and set the inner HTML 
of the resultsContainer variable from question 6 
to the return value of the function.
*/



resultsContainer.innerHTML += catFunction(cats);


/*
Question 10
Using the function from question 8, add a p element containing the age property from each object. If the age property is missing, it should display Age unknown instead.
Wrap the h5 and p in a div.
The function should return the following:
*/



