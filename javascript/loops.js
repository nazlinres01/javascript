/*
for(let i=2; i<10; i++){

    if(i==7){
        console.log('my lucky number:',i);
        continue; // after no 7, continue loop
    }
    if(i==8){
        console.log('Not my lucky number:',i);
        break; // after no 8, not continue loop
    }
    console.log(i);
}


// for(let i=2; i<10; i++){
//     console.log(i);
// }


//while
let i=2;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }



//do-while

let =2;
do{   //first write screen ,conditon true if continue
    console.log(i);
    i++;
}while(i<10)
//I understand better now, this example be good

//loops in array & object

let cars=['Dacia','Ford','Renault','Volvo'];
let people=[

    {firstName:'Asli',lastName:'Deniz',age:18},
    {firstName:'Gamze',lastName:'Cicek',age:20},
    {firstName:'Nur',lastName:'Böcek',age:25},
    
]


// for(let i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }



//for in

// for(let i in cars){
//     console.log(`index:${i} value:${cars[i]}`)
// }

// //foreach 

// cars.forEach(function(item){
//     console.log(item);
// });

// for(let i=0; i<people.length; i++)
// {
//     console.log(people[i].lastName);
// }

// for(let i in people){
//     console.log(`index:${i} name:${people[i].firstName}`);
// }

// people.forEach(function(item){
//     console.log(item.age);
// });


// map: returns an array
let val = people.map(function(item){
    return item.firstName + ' '+ item.lastName + ' '+ item.age;
});

console.log(val);

*/