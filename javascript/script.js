/*let val;

val=window.document;
val=document.all;
val=document.all.length;
val=document.all[11];
val=document.head;
val=document.title;
val=document.anchors;//linkleri getirir
val=document.URL;
val=document.domain; // 127.0.0.1
val=document.images;
val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;
val=document.scripts;
val=document.scripts[2];
val=document.scripts[2].getAttribute('src');

//document.getElementById('txtTaskName')
//id si txtTaskName olan kısım gelir



console.log(val);


//document.getelementById()
let val;
val=document.getElementById('header');
val=document.getElementById('header').id;
val=document.getElementById('header').className;

val=document.getElementById('header');
//val=val.id;
//val=val.className;
val.style.fontSize='45px';
val.style.color='red';
val.style.fontWeight='bold';
//val.style.display='none';

//val=document.getElementById('header').innerText='<b>My ToDo App</b>';
val=document.getElementById('header').innerHTML='<b>My ToDo App</b>';

console.log(val);



//document.querySelector()
//getElementById ye göre daha esnek yapısı var   

console.log(document.querySelector('#header'));// id #
console.log(document.querySelector('.card-header'));// class .
console.log(document.querySelector('div'));//etiketler,ilkini seçer

document.querySelector('li').style.color='purple'; //ilki seçiliyor
document.querySelector('li:last-child').style.color='green'; //ilki seçiliyor
document.querySelector('li:nth-child(2)').style.color='yellow'; //ilki seçiliyor
//2.eleman
document.querySelector('li:nth-child(3)').textContent='task item';
//document.querySelector('li').className='class="list-group-item list-group-item-primary';
//class adı değiştirme

document.querySelector('li').classList.add('active');




//Multiple Elements

//document.getElementsByClassName()

let val;
val=document.getElementsByClassName('list-group-item');
//val=document.getElementsByClassName('list-group-item')[0];

//val=val[2];

//val[1].style.color='blue';
val[2].style.color='green';
val[2].style.fontSize='25px';
val[0].textContent='new item';


for(let i=0; i<val.length; i++)
{
    console.log(val[i].style.color='red');
    console.log(val[i].textContent='new item');
}


console.log(val);




//document.getElementsByTagName()

let val;

val=document.getElementsByTagName('li'); // lie etiketine sahip elemanlar
val=document.getElementById('task-list');
val=val.getElementsByTagName('a');


console.log(val);




//document.querySelectorAll();

let val;

// val=document.querySelectorAll('li');

// val.forEach(function(item,index){
//     item.textContent=`${index} - hello`;
// });


//function(item){           <--- parantez içinde yer alır forEach();

//}


val=document.querySelectorAll('li:nth-child(odd)');//tekil olanları odd
//çift olanları even

val.forEach(function(item){
    item.style.background='#ccc';
});



console.log(val);

//Nodelistlerde foreach kullanılabilir
//HTML Collection



let val;

let  list=document.querySelector('.list-group'); // querySelectorlar için [[Prototype]]: NodeList



val=list

val=list.childNodes;
val=list.childNodes[0];
val=list.childNodes[0].nodeName;
val=list.childNodes[0].nodeType;  //sonuc:3  text olduğunu gösterir, nodeType araştırması yapıp ne anlama geldiğini buluruz
val=list.childNodes[1].nodeType; //sonuc:1 element olduğunu gösterir



val=list.children; //textler yok, sadece elemnetler
val=list.children[0];
val=list.children[2];
val=list.children[1].textContent='new item';

val=list.firstChild; // ilk node
val=list.firstElementChild; // ilk element/etiket

val=list.lastChild; // sonuncu node
val=list.lastElementChild; // sonuncu element/etiket

val=list.childElementCount;

val=list.parentNode;
val=list.parentElement;
val=list.parentElement.parentElement;;

val=list.children[0];
val=list.children[0].nextSibling; //sonraki eleman,text gelir
val=list.children[0].nextElementSibling; //sonraki eleman,element gelir
//previous ile öncekini seçebiliyoruz

//console.log(val);

                //list.children.length
for(let i=0; i<list.childNodes.length; i++){ //9 tane gelir
    if(list.childNodes[i].nodeType==3){
        console.log(list.childNodes[i]);
    }
}




//Creating Element

const li=document.createElement('li'); // li etiketi oluşturuldu çıktı <li></li>
li.className='list-group-item list-group-item-secondary';

//attribute add
li.setAttribute('title','new item');
li.setAttribute('data-id','5');

const text=document.createTextNode('new item');
li.appendChild(text);

const a=document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>'

document.querySelector('#task-list').appendChild(li);

li.appendChild(a);
console.log(li);


//Removing & Changing Nodes

const taskList=document.querySelector('#task-list');

//taskList.remove();
//taskList.childNodes[1].remove();
//taskList.children[3].remove();

//taskList.removeChild(taskList.children[3]);


//removing attribute
//taskList.children[1].removeAttribute('class')

// for(let i=0; i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }

//console.log(taskList);

//Replacing Elements

// const cardHeader=document.querySelector('.card-header');

// const h2=document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent=document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);


//console.log(h2);



let val;

//val=taskList.children[0].firstChild; //To do item
link=taskList.children[0].children[0];

val=link.className;
val=link.classList; //dizi halinde geliyor
//val=link.classList[0];

link.classList.add('new');
link.classList.remove('new');

val=link.getAttribute('class');
val=link.getAttribute('href');
val=link.setAttribute('href','http://sadikturan.com');

val=link.hasAttribute('href');// boş mu dolu mu




console.log(val);




//**Event Listeners 

const btn=document.querySelector('#btnDeleteAll'); //# id'yi gösterir
const btn2=document.querySelector('#btnAddNewTask');
// btn.addEventListener('click',function(){
//     console.log('btn clicked');
// });

btn.addEventListener('click',function(e){ //mouseover->butonun üzerine geldikçe çalışır
    //console.log('btn clicked');

    let val;
    val=e;
    val=e.target; //hangi butona tıkladım
    val=e.target.id;
    val=e.target.classList;
    val=e.type;
    console.log(val);
    e.preventDefault();//scroll yerinde scrollun yukarı çıkmasındaki sebep sayfayı yenilemek
});



// btn.addEventListener('click',btnClick);
// btn2.addEventListener('click',btnClick2);


// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn2 clicked');
// }



const btn=document.querySelector('#btnDeleteAll');
const ul=document.querySelector('#task-list');

// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

//double click
//ul.addEventListener('dblclick',eventHandler);

btn.addEventListener('mousedown',eventHandler); //tıkladım mousedown
btn.addEventListener('mouseup',eventHandler); // bıraktım mouseup

//ul.addEventListener('mouseenter',eventHandler); //ul alanına girince
//ul.addEventListener('mouseleave',eventHandler); //ul alanından çıkınca

//ul.addEventListener('mouseover',eventHandler);//her birinin üzerinde çalışır
//ul.addEventListener('mouseout',eventHandler); //her birinden çıkınca
//nesneler arası geçişlerde de çalışır


const h5=document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler); // mouse oynadığı sürece çalışır



function eventHandler(event){
    console.log(`event type : ${event.type}`);
    console.log(event); //koordinat bilgileri

    h5.textContent=`Mouse X: ${event.offsetX} Mouse Y: ${event.offsetY}`;

}

*/

const input=document.querySelector('#txtTaskName');
const form=document.querySelector('form');

//input.addEventListener('keydown',eventHandler); //önce bu
//input.addEventListener('keyup',eventHandler); //sonra bu
//bir karakteri girdiğimizde çalışır
//input.addEventListener('keypress',eventHandler);
//input.addEventListener('focus',eventHandler); //yazmak için tıkladığımızda çalışır
//input.addEventListener('blur',eventHandler); //çıkıldığında
//input.addEventListener('cut',eventHandler); //Ctrl+x
//input.addEventListener('paste',eventHandler); //Ctrl+v
//input.addEventListener('select',eventHandler); //seçim
//form.addEventListener('submit',eventHandler); //+ tuşuna basınca

const select=document.querySelector('#select');
select.addEventListener('change',eventHandler);


function eventHandler(e){
    console.log('event type '+ e.type);
    //console.log('key code: '+ e.keyCode);
    console.log('value: ' +e.target.value);

    //e.target.style.backgroundColor='blue'; //tıkladığımızda inputa mavi renk olur
    //e.target.style.backgroundColor='yellow'; //çıkıldığında
    e.preventDefault();//sayfa refresh olmuyor bunu eklediğimizde

}