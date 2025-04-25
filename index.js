const getdelivery=(days)=>{
    days.forEach(day => {
        switch (day){
            case "monday":
            
            console.log("Pizza will be deliver");
            break;
            case "tuesday":
            console.log("Burger will be deliver");
            break;
            case "wednesday":
            console.log("Salad will be deliver");
            break;
            default:
                console.log("not supported");
                break;
    
}
});
}
const days=["monday","tuesday","wednesday"];
getdelivery(days);
const getStatus=(status)=>{
    for(let i=0; i<status.length; i++){
        if(status[i]= "available"){
            console.log("Ready to lend");
        }
        else{
            console.log("Checked out");
        }
    }
};
const status =["available","borrowed"];
getStatus(status);
const getcheckedcustomerAge=(customerAge)=>{
    for(let i=0; i<customerAge.length; i++){
        if(customerAge[i]>=18){
            console.log("Adult");
        }
        else{
            console.log("Minor");
        }
    }
};
const customerAge=[1,5,89,6,19,25,30];
getcheckedcustomerAge(customerAge);
const countdownAttempts=(Maxcountdown)=>{
    let attempts=0;
    while(attempts<=Maxcountdown){
        console.log(`You have ${Maxcountdown-attempts}lives left`);
        attempts++;
    }
}
countdownAttempts(3);
    const getUserFeedback=(Feedbacks)=>{
       for(let i=0; i<=Feedbacks.length; i++){
        do{
            console.log(`Feedback of customers:${Feedbacks[i]}`);
            
        }
        while(Feedbacks[i]>=0)
            
       }
    }
   
    getUserFeedback(["good","satisfied","horrible","bad"]);
    const getLoginStatusconfirmation=(loginstatus)=>{
        for(let i=0; i<loginstatus.length; i++){
            if(loginstatus[i]="loggedin"){
                console.log("welcome");
            }
            else{
                console.log("Please log in");
            }
        }
        
    };
    const loginstatus=["loggedin",""];
    getLoginStatusconfirmation(loginstatus);
    const getsupportticketpriority=(priorities)=>{
        priorities.forEach(priority => {
            switch (priority){
                case "low":
                
                console.log("ticket number 3");
                break;
                case "medium":
                console.log("ticket number 2");
                break;
                case "high":
                console.log("ticket number 1");
                break;
                default:
                    console.log("not supported");
                    break;
        
    }
    });
    }
    const priorities=["low","medium","high"];
    getsupportticketpriority(priorities);
    const countdownQuiz=(Maxcountdown)=>{
    let countdown=0;
    while(countdown<=Maxcountdown){
        console.log(`keep counting`);
        countdown++;
    }
}
    countdownQuiz(5);