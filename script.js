function getHistory(){
    return document.getElementById("history-value").innerText
}
// alert(getHistory()); To check.
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
// printHistory("9*9+9") To check .

// To check the output value 
function getOutput(){   
    return document.getElementById("output-value").innerText
};

function printOutput(num){
    if (num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);

    }
   
}

// To get the comma separated value.. for better readability. This function reads the number and returns the comma separated value.
function getFormattedNumber(num){
    if(num=="-"){
        return"";  // if the input is the - minus sign , Return empty value.
    }
    let n =Number(num);
    let value =n.toLocaleString("en");
    return value;
}
// printOutput("997878798986"); To check.


// To manipulate the output values , need to change the comma separated back to the original number
//Defining the function reverseNumberFormat. This will replace the comma to an empty character. The characters are specified
//between slash and slash g

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput())); To check if it is working . 


// Now to access the Operators , use of FOR LOOP to access one by one . Next to add click EventListener to all of them.

let operator= document.getElementsByClassName("operator");
for ( var i =0; i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        // alert("The operator clicked:"+this.id); To check if it works.
        if(this.id==="clear"){
            printHistory(""); //  to clear 
            printOutput("");  //  to clear
        }
        // for backspace first convert to number format 
        else if(this.id=="backspace"){
            var output =reverseNumberFormat(getOutput()).toString(); //convert it to a string and
            if(output){  // if output has a value.
                output=output.substr(0,output.length-1); // remove the last character and print it back.
                printOutput(output);
            }
        }
        else{  //  To First check if output is empty. 
               //  To Declare Output and History values.
               
               
            var output=getOutput();
            var  history=getHistory();
            if (output==""&&history!=""){
                if (isNaN(history[history.length-1])){ // to Check if the last character is an operator
                    history=history.substr(0,history.length-1); // and remove the last character as a substract function.
                }
            }
               
                if(output!="" || history!=""){ // This logic must work if the Output is Not empty OR the History is Not empty.
                // Conditonal Operator 
                //condition?true:false
                output= output==""?  // If output is not empty and history is empty then output is set to empty value.
                output:reverseNumberFormat(output);  // It will be converted to number format only if Output has a value.
                history=history+output;//// In the Calculator when the operator is clicked the Output value is added to the History.
                if(this.id=="="){
                    var result =eval(history); // When the user clicks on the = sign , then History is evaluated.
                    printOutput(result); // The result is printed in the Output and 
                    printHistory("");    // The History is set to empty.
                }
               else{
                   history=history+this.id;  // For other Operators, the Operators get added to the History,
                   printHistory(history);
                   printOutput("");  // The Output is set to empty.
               }
            }
        }
    })
}
                  
let number= document.getElementsByClassName("number");
for ( var i =0; i<number.length;i++){
    number[i].addEventListener('click',function(){
        // alert("The number clicked:"+this.id);
        var output =reverseNumberFormat(getOutput());
        if (output!=NaN){ // to check whether Output is a number before proceeding .
            output=output+this.id; // to concatinate the Id and print it.
            printOutput(output);
        }
    })
}