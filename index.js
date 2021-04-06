function scuberGreetingForFeet(x){
  // Write your code here!
  
    let result
    if (x < 400){
    result ='This one is on me!'
    }
  
    if (x>2000){
      result='I will gladly take your thirty bucks.'
    }

    if (x>2500){
    result="No can do."
    }

    return result
    }

function ternaryCheckCity(city){ 
  // Write your code here!
  
  return (city === "NYC")? "Ok, sounds good." : "No go.";
  

}




function switchOnCharmFromTip(){
  // Write your code here!
  /*
  let tip;
  switch(tip){
  case "generous":
    return 'Thank you so much.';
    
  case "not as generous":
    return 'Thank you.';
  default:
    return "Bye.";
    
  }
}
*/


if (tip === `generous`)
  {return `Thank you so much.`}
if (tip === `not as generous`)
  {return `Thank you.`}
else 
  {return "Bye."}
}


