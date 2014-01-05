var humanScore=0;
var computerScore=0;

document.getElementById("rock").onclick=fightWithRock;
function fightWithRock(){
	var randoWepo=botsWeapon();
	
	if(randoWepo=="rock"){
		document.getElementById("status").textContent="You are tied";
	}
	else if(randoWepo=="paper"){
		humanScore=humanScore+1;
		document.getElementById("humanScore").textContent=humanScore;
	}
	else {
		computerScore+=1;
		document.getElementById("computerScore").textContent=computerScore;
	}
} 
document.getElementById("paper").onclick=fightWithPaper;
function fightWithPaper(){
	var randoWepo=botsWeapon();
	
	if(randoWepo=="rock"){
		humanScore+=1;
		document.getElementById("humanScore").textContent=humanScore;

	}
	else if(randoWepo=="paper"){
		document.getElementById("status").textContent="You are tied";
	}
	else {
		computerScore+=1;
		document.getElementById("computerScore").textContent=computerScore;
	}

}
document.getElementById("scissors").onclick=fightWithScissors;
function fightWithScissors(){
	var randoWepo=botsWeapon();
	
	if(randoWepo=="rock"){
		computerScore+=1;
		document.getElementById("computerScore").textContent=computerScore;
	}
	else if(randoWepo=="paper"){
		humanScore=humanScore+1;
		document.getElementById("humanScore").textContent=humanScore;
	}
	else {
		document.getElementById("status").textContent="You are tied";
	}
}
function botsWeapon(){
	var randoWepoNum=Math.random();
	if(randoWepoNum<.3333333){
		randoWepoNum="rock";
	}
	else if(randoWepoNum<.67){
		randoWepoNum="paper";
	}
	else{
		randoWepoNum="scissors";
	}
	return randoWepoNum;
}