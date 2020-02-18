function playSound(e){
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key= document.querySelector(`div[data-keycode="${e.keyCode}"]`);
    key.classList.add('press');

    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e){
// console.log(this);
e.target.classList.remove('press');
}
const keys = [...document.querySelectorAll('.sound')];
keys.forEach(key => key.addEventListener('transitionend' , removeTransition));


window.addEventListener('keydown', playSound);

























// function playSound(e){
//     const btn=document.querySelector(`div[data-keycode="${e.keyCode}"]`);
//     btn.backgrou
//     switch (e.keyCode){
//         case 49:
//             aud1.play();
//         break;
//         case 50:
//             aud2.play();
//             break;
//         case 51:
//             aud3.play();
//         break;
//         case 81:
//             aud4.play();
//             break;
//         case 87:
//         aud5.play();
//     break;
//     case 69:
//         aud6.play();
//         break;
//     case 65:
//         aud7.play();
//     break;
//     case 83:
//         aud8.play();
//         break;
//         case 68:
//             aud9.play();
//         break;
//         case 90:
//             aud10.play();
//             break;
//             case 88:
//                 aud11.play();
//             break;
//             case 67:
//                 aud12.play();
//                 break;
//          default:
//              console.log("Wrong key");  
//     }
// }

// window.addEventListener("keydown",playSound);

// var aud1=document.querySelector('audio[data-key ="49"]');
// var aud2=document.querySelector('audio[data-key ="50"]');
// var aud3=document.querySelector('audio[data-key ="51"]');
// var aud4=document.querySelector('audio[data-key ="81"]');
// var aud5=document.querySelector('audio[data-key ="87"]');
// var aud6=document.querySelector('audio[data-key ="69"]');
// var aud7=document.querySelector('audio[data-key ="65"]');
// var aud8=document.querySelector('audio[data-key ="83"]');
// var aud9=document.querySelector('audio[data-key ="68"]');
// var aud10=document.querySelector('audio[data-key ="90"]');
// var aud11=document.querySelector('audio[data-key ="88"]');
// var aud12=document.querySelector('audio[data-key ="67"]');