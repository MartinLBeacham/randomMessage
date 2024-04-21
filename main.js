const prompt = require('prompt-sync')({sigint: true});
const randomMessage = require('./randomMessage.js');

let input =''

async function main(){
	do{
		input = await prompt("Hello, please press enter to receive a random message! (type 'quit' to exit.):    ");
		if(input =='quit'){
			break;
		}else{
			console.log(await randomMessage());
		}

}while(input!='quit')
}

main();
