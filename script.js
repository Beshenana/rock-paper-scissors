function computerchoice() {
    const random=Math.random();
    if(random<0.34) return "rock";
    else if(random<=0.67) return "paper";
    else return "scissors";
}
console.log(computerchoice());

function gethumanchoice(){
    const choice=prompt("Enter rock, paper or scissors");
    return choice;
}

console.log(gethumanchoice());