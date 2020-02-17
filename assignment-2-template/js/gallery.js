var FigureImg=document.querySelector("section figure img");
var figCaption=document.querySelector("figcaption");
figCaption.innerHTML = "Pink Flowers";
document.querySelector('#img1').style.padding = "2px"; 
document.querySelector('#img1').style.border = "4px solid blue";  
document.querySelector('#img1').style.boxShadow = "0 0 20px black";  
document.querySelector('#img1').style.filter= "grayscale(0%)"; 
window.onload=function(){
document.querySelector('#img1').click();}
window.onclick = e => {
    console.log(e.target);
    console.log(e.target.id);

    switch(e.target.id){
        case "img1":
            removeBorders();
            FigureImg.src="./images/flowers-pink-large.jpg";
            figCaption.textContent= 'Pink Flowers';    
            e.target.style.border = "4px solid blue";  
            e.target.style.padding = "2px";      
            e.target.style.boxShadow = "0 0 20px black";
            e.target.style.filter= "grayscale(0%)";                  
            break;
        case "img2":        
            removeBorders();    
            FigureImg.src="./images/flowers-purple-large.jpg";
            figCaption.textContent= 'Purple Flowers';
            e.target.style.border = "4px solid blue";
            e.target.style.padding = "2px"; 
            e.target.style.boxShadow = "0 0 20px black";
            e.target.style.filter= "grayscale(0%)";   
            break;
        case "img3":
            removeBorders();
            FigureImg.src="./images/flowers-red-large.jpg";
            figCaption.textContent= 'Red Flowers';
            e.target.style.border = "4px solid blue";
            e.target.style.padding = "2px"; 
            e.target.style.boxShadow = "0 0 20px black";
            e.target.style.filter= "grayscale(0%)";   
            break;
        case "img4":     
            removeBorders();       
            FigureImg.src="./images/flowers-white-large.jpg";
            figCaption.textContent= 'White Flowers';
            e.target.style.border = "4px solid blue";
            e.target.style.padding = "2px"; 
            e.target.style.boxShadow = "0 0 20px black";
            e.target.style.filter= "grayscale(0%)";   
            break;
        case "img5":
            removeBorders();
            FigureImg.src="./images/flowers-yellow-large.jpg";
            figCaption.textContent= 'Yellow Flowers';
            e.target.style.border = "4px solid blue";
            e.target.style.padding = "2px"; 
            e.target.style.boxShadow = "0 0 20px black";
            e.target.style.filter= "grayscale(0%)";   
            break;
    }
} 
function removeBorders(){    
    var x, i;
    x = document.querySelectorAll("img");
    for (i = 0; i < x.length; i++) {
      x[i].style.border = '';
      x[i].style.padding='';
      x[i].style.filter= "grayscale(100%)";      
    }
    FigureImg.style.filter= "grayscale(0%)";
}