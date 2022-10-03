/* declare + give value to variable */
/* let myVariable = "cats"; */

/* define function */
/* function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
} */

/* events */
/*
document.querySelector("html").addEventListener("click", () => {
    alert("don't click me") // () =>: anonymus function, equal to function()
})
*/

/* image changer */
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");

myButton.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cat.jpg"){
        myImage.setAttribute("src", 
        "images/cat2.jpg");
    } else {
        myImage.setAttribute("src", 
        "images/cat.jpg");
    }
};

