// without callback function

// function yes(){
//     alert("You agreed.");
// }

// function no(){
//     alert("You canceled the execution.");
// }

// function ask(questionStr){

//     if(confirm(questionStr)){
//         yes();
//     }
//     else
//     {
//         no();
//     }
// }

// ask("Do you agree??");

// with callback function

function ask(questionStr, funcYes,funcNo){

    if(confirm(questionStr)){
        funcYes();
    }
    else
    {
        funcNo();
    }

}


ask("Do you agree??",
    ()=> alert("You agree"),
    ()=> alert("you canceled the execution")
    );

