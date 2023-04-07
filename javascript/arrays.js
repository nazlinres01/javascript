/*
let names=['seda','mehmet','esra','tuana'];
let years=[2015,1996,1965,1999];
let mix= ['nazli','1997',null,true,undefined,['read the book','listen the music','songs']];
mix[3]='ayse';

console.log(names);
console.log(names.length);
console.log(typeof names); //object
console.log(years);
console.log(mix);
console.log(mix[1]);
//names[5]='ebrar';
//console.log(names); // 4.eleman olmadığından empty
//bu durumun önüne geçmek için
console.log(names);
names[names.length]='ebrar';
console.log(names);

years.push(1998); // ekleme 
console.log(years); //en sona eklenir
years.unshift(1998); // en başa eklenir
console.log(years);
years.pop();
console.log(years);
years.shift();
console.log(years);

//let index=names.indexOf('mehmet'); //1.eleman eğer yoksa -1 gelir
//console.log(index);

//console.log(names.reverse()); // diziyi ters çevir

//console.log(years.sort()); //sıralama yapılır
//console.log(names.sort()); 

//let val=years.concat(names); //ekleme işlemi yapıldı
//console.log(val);
console.log(names);
names.splice(2,2,'yusuf'); //2.elemandan sonra başla 2.elemandan sonra kaç eleman silsin
console.log(names);
//names.splice(0,1) //ilk elemanı sil


function over18(year){
    let age=2022-year;
    return age>=18;
}

console.log(over18(2015));
//let val=years.find(over18); // ilk 18 yaşından büyük olan kişiyi buluyor
let val=years.filter(over18); // 18 yaşından büyük olan kişileri filtreler
console.log(val); 

*/