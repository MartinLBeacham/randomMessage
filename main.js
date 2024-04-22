const prompt = require('prompt-sync')({sigint: true});
const randomMessage = require('./randomMessage.js');

let input =''

 function main(){
	do{
		input = prompt("Hello, please press enter to receive a random message! (type 'quit' to exit):    ");
		if(input =='quit'){
			break;
		}else{
			console.log(randomMessage());
		}

}while(input!='quit')
}

main();
