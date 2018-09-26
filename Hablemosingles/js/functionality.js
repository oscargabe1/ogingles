var vocabularyOrExpressions = true;
function getExpressions(){
	let cambiarContenido = document.querySelector(".ogvocabulario");
	let cambiarContenido2 = document.querySelector(".ogexpressions");

			cambiarContenido.style.display ="none";
			cambiarContenido2.style.display ="inline";

		
}

function getVocabulary(){
	let cambiarContenido2 = document.querySelector(".ogvocabulario");
	let cambiarContenido = document.querySelector(".ogexpressions");

			cambiarContenido.style.display ="none";
			cambiarContenido2.style.display ="inline";
		
}



function exp(){
	console.log("expresion");
}

function voc(){
	console.log("vocabulario");
}


//randoms
var numberOfWords;
var myarray = [];
var answerArray = [];
var exerciseDone = false;
var rnd1;
var rnd2;
var rnd3;
var rnd4;
var rnd5;
var rnd6;
var rnd7;
var rnd8;
var rnd9;
var rnd10;



function generarRnds(){
	for (i = 0; i  < 100; i++) {
		rnd = Math.floor(Math.random() * numberOfWords);
		//console.log(rnd);
			if (rnd != myarray[0] && rnd != myarray[1] && rnd != myarray[2] && rnd != myarray[3] && rnd != myarray[4] && rnd != myarray[5] && rnd != myarray[6] && rnd != myarray[7] && rnd != myarray[8] && rnd != myarray[9] && rnd != myarray[10] && myarray.length < numberOfWords) {
				myarray.push(rnd);
			}
	}
	
}



function asignarPalabras(){
	primerOrden = [oracionArray[myarray[0]],oracionArray[myarray[1]],oracionArray[myarray[2]],oracionArray[myarray[3]],oracionArray[myarray[4]],oracionArray[myarray[5]],oracionArray[myarray[6]]];
	console.log(primerOrden);
	myarray = [];
}

function ordenarPalabras(){
	let cambiarContenido = document.querySelector(".ogcontenedor");
	let ponerInstrucciones = document.querySelector(".oginstructions");

	ponerInstrucciones.innerHTML = '<h4>Rearrange the words in each exercise to create correct sentences.</h4>';

	if (numberOfWords == 3) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>';
	}
	if (numberOfWords == 4) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>';
	}
	if (numberOfWords == 5) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button onclick="pressButton0();" id="ogbutton0" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button onclick="pressButton1();" id="ogbutton1" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button onclick="pressButton2();" id="ogbutton2" class="ui button">'+primerOrden[2]+'</button>'+
						             '<button onclick="pressButton3();" id="ogbutton3" class="ui button">'+primerOrden[3]+'</button>'+
						             '<button onclick="pressButton4();" id="ogbutton4" class="ui button">'+primerOrden[4]+'</button>'+
						             '<br><br>'+
						             		'<div class="ogbuttoncontainer2">'+
												'<div class="ui buttons">'+
												  '<button onclick="reset();" class="ui left attached button">Reset</button>'+
												  '<button onclick="checkAnswer();" id="ogcheckbutton"class="ui right attached blue button">Check</button>'+
												'</div>'+
											'</div>'+

											'<br><div class="ogcentered"> <div class="ognextex">'+
												
											'</div> </div>';
	}
	if (numberOfWords == 6) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button onclick="pressButton0();" id="ogbutton0" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button onclick="pressButton1();" id="ogbutton1" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button onclick="pressButton2();" id="ogbutton2" class="ui button">'+primerOrden[2]+'</button>'+
						             '<button onclick="pressButton3();" id="ogbutton3" class="ui button">'+primerOrden[3]+'</button>'+
						             '<button onclick="pressButton4();" id="ogbutton4" class="ui button">'+primerOrden[4]+'</button>'+
						             '<button onclick="pressButton5();" id="ogbutton5" class="ui button">'+primerOrden[5]+'</button>'+
						             '<br><br>'+
						             		'<div class="ogbuttoncontainer2">'+
												'<div class="ui buttons">'+
												  '<button onclick="reset();" class="ui left attached button">Reset</button>'+
												  '<button onclick="checkAnswer();" id="ogcheckbutton"class="ui right attached blue button">Check</button>'+
												'</div>'+
											'</div>'+

											'<br><div class="ogcentered"> <div class="ognextex">'+
												
											'</div> </div>';
	}
	if (numberOfWords == 7) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>';
	}
	if (numberOfWords == 8) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[7]+'</button>';
	}
	if (numberOfWords == 9) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[7]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[8]+'</button>';
	}
	if (numberOfWords == 10) {
		cambiarContenido.innerHTML = '<hr>'+
									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[7]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[8]+'</button>'+
						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[9]+'</button>';
	}
						 
}

function pressButton0(){
let getText = document.querySelector("#ogbutton0");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}

function pressButton1(){
let getText = document.querySelector("#ogbutton1");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}

function pressButton2(){
let getText = document.querySelector("#ogbutton2");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}

function pressButton3(){
let getText = document.querySelector("#ogbutton3");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}
function pressButton4(){
let getText = document.querySelector("#ogbutton4");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}
function pressButton5(){
let getText = document.querySelector("#ogbutton5");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}
function pressButton6(){
let getText = document.querySelector("#ogbutton6");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}
function pressButton7(){
let getText = document.querySelector("#ogbutton7");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}
function pressButton8(){
let getText = document.querySelector("#ogbutton8");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}
function pressButton9(){
let getText = document.querySelector("#ogbutton9");
answerArray.push(getText.textContent)
console.log(answerArray);
let putWord = document.querySelector(".ogtext");
putWord.innerHTML = answerArray.join(" ");
getText.className="ui disabled button";
}
function clearBoard(){
	let putWord = document.querySelector(".ogtext");
	putWord.innerHTML = "<br>";	
}

function checkAnswer(){
let getCheckButton = document.querySelector("#ogcheckbutton");
let nextExcercise = document.querySelector(".ognextex");

	if (answerArray.toString() == oracionArray.toString() && answerArray.length == oracionArray.length) {
		console.log("ganaste");
		ogcheckbutton.className ="ui green button";
		ogcheckbutton.innerHTML ="Correct!";
		nextExcercise.style.display = "inline";
		




	}
	else if(answerArray.toString() != oracionArray.toString() && answerArray.length == oracionArray.length){
		console.log("perdiste");
		ogcheckbutton.className ="ui red button";
		ogcheckbutton.innerHTML ="Try again!";
	}


}

function nextOne(numero){
	let SigEj = document.querySelector(".ognextex");
	SigEj.innerHTML =  '<button onclick="ejercicio'+numero+'();" id="ogsigejercicio" class="ui right labeled icon blue button">'+
						'<i class="right arrow icon"></i>'+
						'Next'+
						'</button>';
}
var isPlaying = false;
function playAudio(audionum){

	var snd = new Audio("sound"+audionum+".mp3");
	

	if (isPlaying == false) {
		isPlaying = true;
		snd.play();
		
	
	}
	
	snd.onended = function() {parar()};

	function parar(){
		isPlaying = false;
		console.log("lmao");
}

}






function reset(){
	let getCheckButton = document.querySelector("#ogcheckbutton");
	clearBoard();
	answerArray = [];
	let resetb1 = document.querySelector("#ogbutton0").className="ui button";
	let resetb2 = document.querySelector("#ogbutton1").className="ui button";
	let resetb3 = document.querySelector("#ogbutton2").className="ui button";
	let resetb4 = document.querySelector("#ogbutton3").className="ui button";
	let resetb5 = document.querySelector("#ogbutton4").className="ui button";
	let resetb6 = document.querySelector("#ogbutton5").className="ui button";
	let resetb7 = document.querySelector("#ogbutton6").className="ui button";
	let resetb8 = document.querySelector("#ogbutton7").className="ui button";
	let resetb9 = document.querySelector("#ogbutton8").className="ui button";
	let resetb10 = document.querySelector("#ogbutton9").className="ui button";
	ogcheckbutton.className ="ui blue button";
	ogcheckbutton.innerHTML ="Check";
}


		


function ejercicio3(){
	clearBoard();
	oracionArray = ["english", "is", "a", "very", "useful", "language"];
	answerArray = [];
	primerOrden = [];
	numberOfWords = 6;
	generarRnds();
	console.log(myarray);
	asignarPalabras();
	ordenarPalabras();
	nextOne(4);

}

function ejercicio4(){
	clearBoard();
	oracionArray = ["we", "are", "doing", "our", "homework"];
	answerArray = [];
	primerOrden = [];
	numberOfWords = 5;
	generarRnds();
	console.log(myarray);
	asignarPalabras();
	ordenarPalabras();
	nextOne(3);
}










