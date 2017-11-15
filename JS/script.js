function genQ() {
var quoteMsg = document.getElementById('message');
var quoteBtn = document.getElementById('generateQuote');
var randomQNum = (Math.floor(Math.random() * 10) + 1);
if(randomQNum === 1){
	quoteMsg.innerHTML = "Juice with the 1st pick in the NFL Draft";
}else if (randomQNum === 2) {
	quoteMsg.innerHTML = "Money rules the world";
}else if (randomQNum === 3) {
	quoteMsg.innerHTML = "Football is my life and my way out";
}else if (randomQNum === 4){
	quoteMsg.innerHTML = "Success is measured by money and hardwork";
}else if (randomQNum === 5){
	quoteMsg.innerHTML = "Touchdown! Yelled the crowd as Juice scored";
}else if (randomQNum === 6){
	quoteMsg.innerHTML = "Millions is what I'll be making in a couple of years";
}else if (randomQNum === 7) {
	quoteMsg.innerHTML = "Billions is what I'll have by the time I retire";
}else if (randomQNum === 8){
	quoteMsg.innerHTML = "Panthers are my favorite football team";
}else if (randomQNum === 9){
	quoteMsg.innerHTML = "First Round is when I'll get drafted";
}else{
	quoteMsg.innerHTML = "Leading Rusher is what I'll be within my first 2 years in the NFL";
}


}