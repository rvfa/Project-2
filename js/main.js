// The variables below hold the list of names the script can use.
// There's a variable for first names e another one for last names.

var names = ["Calico", "Anne", "Bartholomew", "William", "Henry", "Edward", "Catherine", "Charlotte", "Flora", "Maria"];

var lastNames = ["O'Connor", "Smith", "Barbosa", "White", "Butcher", "The Third", "Black", "Fletcher", "Taylor", "Hawkins"];


// This hides the restart button
document.querySelector(".restart").style.visibility = "hidden";


// This function is called once the "Generate Name!" button is clicked and create the names list
function generate() {

    // The variable nameNum holds the number of names to be generated, chosen by the user.
    var nameNum = document.querySelector(".nameNum").value;

    /* The if/else statement is used to detect if the user typed a number between 1 and 10 or anything else. If it's a number larger than 10 or not a number at all the user will be alerted and the names won't be generated */
    if (nameNum > 10 || isNaN(nameNum)) {
        alert("Please, pick a number between 1 and 10");
    } else {

        // This for loop is used to generate the names. It will run the same amount of times the variable nameNum has as its value.
        for (var i = 0; i < nameNum; i++) {

            /* These two variables below are used to generate two random numbers between 1 and 10. These numbers are used to access the names arrays and pick a name from each. randomFirst is used to access the names array and randomLast is used to access the lastNames array. */
            var randomFirst = Math.floor(Math.random() * 10);
            var randomLast = Math.floor(Math.random() * 10);

            // The random numbers generated above are used below to access the arrays and put together First Name + Last Name on the DOM.
            document.querySelector(".nameList").innerHTML += names[randomFirst] + " " + lastNames[randomLast] + "<br>";

            // This hides the "Generate Name!" button.
            document.querySelector(".generateButton").style.visibility = "hidden";

            // This makes the "Restart" button available.
            document.querySelector(".restart").style.visibility = "visible";
        } // This closes the for loop

    } // This closes the if/else statement
} // This closes the function generate()


// This function is called when the "Restart" button is clicked and it resets the name generator.
function restart() {
    // Clears the names list.
    document.querySelector(".nameList").innerHTML = " ";

    // Makes the "Generate Names!" button visible again.
    document.querySelector(".generateButton").style.visibility = "visible";

    // Hides the "Restart" button once again.
    document.querySelector(".restart").style.visibility = "hidden";
}