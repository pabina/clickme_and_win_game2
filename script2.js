let squarals=document.querySelectorAll('.squaral');
let score=document.getElementById('result');
let timeis=document.getElementById('time');
let mybtn=document.getElementById('mybtn');

let currentTime=30;
let hitpoint;
let result=0;

//to show cat inthe box

 function rendermycat(){
squarals.forEach((element,id)=>{
element.classList.remove('mole');
})
let rendercat=squarals[Math.floor(Math.random()*9)];

rendercat.classList.add('mole');
hitpoint=rendercat.id;

squarals.forEach((myele)=>{
    myele.addEventListener('click',()=>{
        console.log('you click me');
        if(myele.id === hitpoint){
            result++;
            score.textContent = result;
            hitpoint= null;

        }
    })
})

}

function myfun(){
 let me=setInterval(() => {
    rendermycat();
    currentTime--;
    timeis.textContent=currentTime;
    if(currentTime==0){
        clearInterval(me);
        alert(`your time is off
        your score is:${result}`);
    }
}, 500)}
myfun();

mybtn.addEventListener('click',()=>{
   myfun();
   currentTime=30;
   result=0;
   score.textContent = result;
})