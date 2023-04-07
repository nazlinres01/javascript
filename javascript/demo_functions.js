/*
balance=5000;
addAcc=500;

reqAmount=prompt('Requested Amount:');

if(reqAmount<=balance){
    console.log('Your balance is enough');
}

else if(reqAmount>balance){
    console.log('You have insufficient balance');
    console.log('Do you want an additional account?');
    let ans=confirm('yes or no');
    if(ans){
        balance+=addAcc;
        if(balance>reqAmount){
            console.log('Your balance is enough');
        }
        else if(balance<reqAmount)
        {
            console.log('You have insufficient balance');
        }
    }
    else{
        console.log('A good day!');
    }
}
*/