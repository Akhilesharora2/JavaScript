// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// var textToSpeak = 'This is the text string that you will generate with your script';
var textToSpeak = "";
var speakButton = document.querySelector('button#speak');
var x;
var Reset = document.querySelector('button#reset');
var RandomStory = document.querySelector('button#randomStory');
var write = document.querySelector('p.WrittenStory');

var val1,val2,val3,val4,val5;
const btn1=document.querySelector('button#btn1');
const btn2=document.querySelector('button#btn2');
const btn3=document.querySelector('button#btn3');
const btn4=document.querySelector('button#btn4');
const btn5=document.querySelector('button#btn5');

btn1.addEventListener('click',bt1);
btn2.addEventListener('click',bt2);
btn3.addEventListener('click',bt3);
btn4.addEventListener('click',bt4);
btn5.addEventListener('click',bt5);

function bt1(){
	Random();
	val1=document.querySelector('td#col1\\.'+x).innerHTML;	
	speakNow(val1);
	document.querySelector('button#btn1 div#circle').style.backgroundColor = "red";	
		document.querySelector('td#col1\\.'+x).style.backgroundColor = "yellow";
		setInterval(function(){
			document.querySelector('td#col1\\.'+x).style.backgroundColor = "";
		},1500);
}
function bt2(){
	Random();
	val2=document.querySelector('td#col2\\.'+x).innerHTML;	
	speakNow(val2);
	document.querySelector('button#btn2 div#circle').style.backgroundColor = "red";
	document.querySelector('td#col2\\.'+x).style.backgroundColor = "yellow";
		setInterval(function(){
			document.querySelector('td#col2\\.'+x).style.backgroundColor = "";
		},1500);
}
function bt3(){
	Random();
	val3=document.querySelector('td#col3\\.'+x).innerHTML;
	speakNow(val3);
	document.querySelector('button#btn3 div#circle').style.backgroundColor = "red";
	document.querySelector('td#col3\\.'+x).style.backgroundColor = "yellow";
		setInterval(function(){
			document.querySelector('td#col3\\.'+x).style.backgroundColor = "";
		},1500);
}
function bt4(){
	Random();
	val4=document.querySelector('td#col4\\.'+x).innerHTML;
	speakNow(val4);
	document.querySelector('button#btn4 div#circle').style.backgroundColor = "red";
	document.querySelector('td#col4\\.'+x).style.backgroundColor = "yellow";
		setInterval(function(){
			document.querySelector('td#col4\\.'+x).style.backgroundColor = "";
		},1500);
}
function bt5(){
	Random();
	val5=document.querySelector('td#col5\\.'+x).innerHTML;
	speakNow(val5);
	document.querySelector('button#btn5 div#circle').style.backgroundColor = "red";
	document.querySelector('td#col5\\.'+x).style.backgroundColor = "yellow";
		setInterval(function(){
			document.querySelector('td#col5\\.'+x).style.backgroundColor = "";
		},1500);
}
Reset.onclick = function(){
	write.innerHTML = "";
	val1 = ""; document.querySelector('button#btn1 div#circle').style.backgroundColor = "";
	val2 = ""; document.querySelector('button#btn2 div#circle').style.backgroundColor = "";
	val3=""; document.querySelector('button#btn3 div#circle').style.backgroundColor = "";
	val4=""; document.querySelector('button#btn4 div#circle').style.backgroundColor = "";
	val5=""; document.querySelector('button#btn5 div#circle').style.backgroundColor = "";
}

RandomStory.onclick = function(){
	bt1(); write.innerHTML = val1; document.querySelector('td#col1\\.'+x).style.backgroundColor = "";
	bt2(); write.innerHTML += val2; document.querySelector('td#col2\\.'+x).style.backgroundColor = "";
	bt3(); write.innerHTML += val3; document.querySelector('td#col3\\.'+x).style.backgroundColor = "";
	bt4(); write.innerHTML += val4; document.querySelector('td#col4\\.'+x).style.backgroundColor = "";
	bt5(); write.innerHTML += val5; document.querySelector('td#col5\\.'+x).style.backgroundColor = "";
}
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	textToSpeak=val1+val2+val3+val4+val5;
	console.log(textToSpeak);
	speakNow(textToSpeak);
}

/*Random function to select random number between 0 and 5*/
function Random() {
	 x = Math.floor((Math.random() * 6));
	
  }
  