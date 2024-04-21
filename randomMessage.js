
module.exports = function randomMessage(){
	
	let sentence =''

	const firstWordList = [{text:'A', type:'singular'}, {text:'The', type:'singular'}, {text:'Three', type:'plural'}, {text:'Twenty-Six', type:'plural'}, {text:'Uncountable', type:'plural'}];
	
	const firstPos = Math.floor(Math.random()*(firstWordList.length));

	const firstWord = firstWordList[firstPos]; 
	
	const secondWordList = [{text:'balloon', type:'singular'}, {text:'ham sandwich', type:'singular'}, {text:'rollercoasters', type:'plural'}, {text:'candyfloss vendors', type:'plural'}, {text:'cantaloupes', type:'plural'}, {text:'Moon Mission Smoothie',type:'singular'}];

	secondWordApplicable = secondWordList.filter((item)=> item.type==firstWord.type);

	secondPos = Math.floor(Math.random()*(secondWordApplicable.length));

	const secondWord = secondWordApplicable[secondPos];

	const thirdWordList = [{text:'pops', type:'singular'}, {text:'flies', type:'singular'}, {text:'pop', type:'plural'}, {text:'illumine', type:'plural'}, {text:'creak', type:'plural'}, {text:'glows',type:'singular'}];

	thirdWordApplicable = thirdWordList.filter((item)=> item.type==firstWord.type);

	thirdPos = Math.floor(Math.random()*(thirdWordApplicable.length));

	const thirdWord = thirdWordApplicable[thirdPos];

	return firstWord.text+" "+secondWord.text+" "+thirdWord.text;
};
