// let startPoint=0;
// let endPoint=1500;
// let a=setInterval(()=>{
//     if(startPoint>=endPoint){

//         clearInterval(a)
//     }else
//     startPoint+=50;
//     window.scrollBy(0,50)

// },50)
let a=document.querySelector("#liAbout a")
a.addEventListener('click',(e)=>{
   e.preventDefault()
   let startPoint=0;
let endPoint=421.67;
let a=setInterval(()=>{
    if(startPoint>=endPoint){

        clearInterval(a)
    }else
    startPoint+=50;
    window.scrollBy(0,50)

},50)
})
let b=document.querySelector("#liSkills a")
b.addEventListener('click',(e)=>{
   e.preventDefault()
   let startPoint=0;
let endPoint=648.7;
let a=setInterval(()=>{
    if(startPoint>=endPoint){

        clearInterval(a)
    }else
    startPoint+=50;
    window.scrollBy(0,50)

},50)
})
let c=document.querySelector("#liExperience a")
c.addEventListener('click',(e)=>{
   e.preventDefault()
   let startPoint=0;
let endPoint=1074.56;
let a=setInterval(()=>{
    if(startPoint>=endPoint){

        clearInterval(a)
    }else
    startPoint+=50;
    window.scrollBy(0,50)

},50)
})
let d=document.querySelector("#liEducation a")
d.addEventListener('click',(e)=>{
   e.preventDefault()
   let startPoint=0;
let endPoint=2024.02;
let a=setInterval(()=>{
    if(startPoint>=endPoint){

        clearInterval(a)
    }else
    startPoint+=50;
    window.scrollBy(0,50)

},50)
})
let e=document.querySelector("#liPortfolio a")
e.addEventListener('click',(e)=>{
   e.preventDefault()
   let startPoint=0;
let endPoint=2973.477;
let a=setInterval(()=>{
    if(startPoint>=endPoint){

        clearInterval(a)
    }else
    startPoint+=50;
    window.scrollBy(0,50)

},50)
})
let f=document.querySelector("#liContact a")
f.addEventListener('click',(e)=>{
   e.preventDefault()
   let startPoint=0;
let endPoint=4234.4;
let a=setInterval(()=>{
    if(startPoint>=endPoint){

        clearInterval(a)
        return;
    }else
    startPoint+=50;
    window.scrollBy(0,50)

},50)
})

let progressBars=document.querySelectorAll('.skill-progress > div ');
// console.log(progressBars)
let skillsContainer=document.getElementById('skills-container')
window.addEventListener('scroll',checkScroll);
let animationDone=false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}
initialiseBars()

function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width')
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval)
                return;
            }else{
                currentWidth++;
                bar.style.width=currentWidth + "%"
            }
        },15)
    }
}

//animation ko ek bar fire karne k liye

// function checkScroll(){
//     let coordinates=skillsContainer.getBoundingClientRect();

//    if(animationDone==false && coordinates.top< window.innerHeight){
//     animationDone=true;
//     console.log("skilll section visible")
//     fillBars()
//    }

// }

// animation ko har bar fire karne k lye
function checkScroll(){
    let coordinates=skillsContainer.getBoundingClientRect();

   if(animationDone==false && coordinates.top<= window.innerHeight){
    animationDone=true;
    console.log("skilll section visible")
    fillBars()
   }else if(coordinates.top >window.innerHeight){
    animationDone=false;
    initialiseBars()
   }

}