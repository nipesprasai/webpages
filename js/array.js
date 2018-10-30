function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

var num = [10,2,3,4];
// printReverse(num);

// isUniform()

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

// console.log(isUniform(num));

// sumArray()

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

console.log(sumArray(num));

// max()

function max(arr){
	var maxm = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > maxm){
			maxm = arr[i];
		}
	}
	return maxm;
}

console.log(max(num));

function formax(arr){
	var maxm = arr[0];
	arr.forEach(function(element){
			maxm = element;
		}
	});
	return maxm;
}


