module.exports = function zeros(expression) {
var array = expression.split('*');
	//console.log('here is my array');
	//console.log(array);
	var arrOneExc = [];
	var arrTwoExc = [];
	for (var i = 0; i<array.length; i++){
		if(array[i].includes('!!')){
			arrTwoExc.push(array[i]);
		} else {
			arrOneExc.push(array[i]);
		}
	}
	var arrayOne = arrayConvertorOne(arrOneExc);
	var arrayTwo = arrayConvertorTwo(arrTwoExc);
	//console.log(arrayOne);
	//console.log(arrayTwo);

	var finalArr = arrayOne.concat(arrayTwo);
	return zerosCounter(multiplicationArrayElements(finalArr));
}


function arrayConvertorOne(array){
		var finalArr = [];
		for(var i = 0; i<array.length; i++){
			if(array[i].length >2){
			var num = array[i].substring(0,2);
			}else{
				var num = array[i].substring(0,1);
			}
			finalArr.push(recursionLoop(num));
		}
		return finalArr;
	}


function multiplicationArrayElements(array){
	var sum = 1;
	var len = array.length;

	for (var i = 0; i<array.length; i++){
		sum=mult(sum,array[i]);
	}
	return sum;
}

function arrayConvertorTwo(array){
	finalArr = [];
	for (var j = 0; j<array.length; j++){
		if(array[j].length>3){
			var numm = array[j].substring(0,2);
	}else {
		var numm = array[j].substring(0,1);
	}
		finalArr.push(recursionOddLoop(numm));
	}
	return finalArr;
}


function zerosCounter(strg){
	var string = ''+strg;
	//console.log(string);
	var len = 0;
	var numOfZeros = 0;
	for (var j = string.length-1; j>0; j--){
		if(string.charAt(j)!='0'){
			break;
		}
		len++;
	}
//	var lenn = len ;
	//for (var i = lenn; i>lenn; i--){
	//	if(string.charAt(i) === '0'){
		//	numOfZeros++;
		//}
//	}
	return len;
}

function recursion(number){
	if(number <= 0){
			return 1;}
	return number*recursion(number-1);
}

function oddRecursion(number){
	if(number<=1){
		return 1;
	}
	return number*oddRecursion(number-2);
}


function recursionLoop (num){
	var sum = 1;
	while(num>1){
		sum = mult(sum,num);
		num--;
	}
	return sum;
}


function oddRecursion(number){
	if(number<=1){
		return 1;
	}
	return number*oddRecursion(number-2);
}

function recursionOddLoop(num){
	var sum = 1;
	while(num>1){
		sum = mult(sum,num);
		num-=2;
	}
	return sum;
}

function mult(first,second){
	var stringO = '' + first
	var stringT = '' + second
	var	first = stringO.split('').reverse();
	var	second = stringT.split('').reverse();
	var result = [];
	for(var i = 0; first[i] >= 0; i++){
		for(var j = 0 ; second[j] >= 0; j++){
			if(!result[i+j]){
				result[i+j] = 0;
			}
			result[i+j]+=first[i]*second[j];
		}
	}
	for(var i = 0;result[i]>=0;i++){
		if(result[i]>=10){
			if(!result[i+1]){
				result[i+1] = 0;
			}
		result[i+1] +=parseInt(result[i]/10);
		result[i]%=10;
			}
		}
	return result.reverse().join('');
		}
