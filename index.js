const body=document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor= name;
}
 function randomColor(){
    
    const Red =Math.round(Math.random()*255)
    const green=Math.round(Math.random()*255)
    const Blue=Math.round(Math.random()*255)
    
    const color =`rgb(${Red},${green},${Blue})`
    body.style.backgroundColor= color;
 }
 randomColor()
