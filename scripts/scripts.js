/****************** YOUR NAME: Ciara Castro
/****************** LAB NAME: Lab 6
/****************** DESCRIPTION: Using JavaScript and Deploying a Website
/****************** LAST MODIFIED: Nov. 22, 2024


The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

document.addEventListener("DOMContentLoaded", function () {

    /****************** create variables ******************/
    // variable for model name and duration 
    let modelName = "Model XYZ"; // default model
    let duration = 0; // default duration for days


    /****************** helper function ******************/
    // function to recalculate the total cost and update the calculated cost span
    /* create a function called recalculate() which will
        - create a variable to represent the calculated-cost span element. That will look something like:
            // let costLabel = document.getElementById("calculated-cost");
        - check the value of the modelName variable, and use that to calculate the new total cost:
            e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
            if modelName is currently "CPRG", duration * 213 gives us the new total cost.
        - set the value of the calculated-cost element's innerHTML to this new value
    */

    // function for recalculating the total cost and update the calculated cost span
    function recalculate() {
        // Get the calculated cost span element
        let costLabel = document.getElementById("calculated-cost");
        // Get the cost per day based on selected model
        let costPerDay;
        if (modelName === "Model XYZ") {
            costPerDay = 100;
        } else if (modelName === "Model CPRG") {
            costPerDay = 213;
        }
        // calculation for the new total cost
        let totalCost = duration * costPerDay;
        // update the innerHTML of the calculated cost element
        costLabel.innerHTML = totalCost.toFixed(2);
    }



    /****************** model button logic ******************/

    /* 
    - first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
    - second, create a function called changeModel() which checks the value of the model name variable. This function will:
        - create a variable to represent the model-text span element
        - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
        - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
        - then, recalculate() the total cost.
    - finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

    // Create a variable to represent the "Switch Model" pseudo-button
    let modelButton = document.getElementById("model-button");

    // Define the changeModel() function
    function changeModel() {
        // create a variable to represent the model-text span element
        let modelText = document.getElementById("model-text");
        // check the current value of the modelName and switch between models
        if (modelName === "Model XYZ") {
            modelName = "Model CPRG";
            modelText.innerHTML = "Model CPRG";
        } else if (modelName === "Model CPRG") {
            modelName = "Model XYZ";
            // Update the innerHTML
            modelText.innerHTML = "Model XYZ";
        }
        recalculate();
    }

    // Attach event listener to the model button
    if (modelButton) {
        modelButton.addEventListener("click", changeModel);
    } else {
        console.log("Model button not found");
    }

    /****************** duration button logic ******************/
    /*  - first, create a variable to represent the "Change Duration" pseudo-button.
        - then, create a function called changeDuration() that will
            - create a variable to represent the duration-text span element
            - prompt() the user for a new duration
            - save the result of the prompt() to the duration variable
            - change the innerHTML of the duration-text span element to this new value
            - recalculate() the total cost/
        - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
    */

    // Variable to represent the change duration pseudo button
    let durationButton = document.getElementById("duration-button");

    // Define the changeDuration() function
    function changeDuration() {
        // variable to represent the duration text span element
        let durationText = document.getElementById("duration-text");
        // prompt user to enter new duration
        let newDuration = prompt("Enter the number of days you would like to rent the robot: ");
        // save the result of the prompt() to the duration variable
        duration = parseInt(newDuration, 10) || 0;
        // update the innerHTML of the duration text span element
        durationText.innerHTML = duration;
        // recalculate the total cost
        recalculate();
    }

    // Attach the changeDuration function to the change duration pseudo button
    if (durationButton) {
        durationButton.addEventListener("click", changeDuration);
    }
});
