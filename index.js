// Add your functions here

function map(array, func) {
    let mapArray =[];
    for (let i = 0; i < array.length; i++) {
       mapArray.push(func(array[i]));
    }
    return mapArray;
}

function reduce(array, func, start=0) {
    if (typeof(func(array[0], start)) === "boolean"){
		start = true
	}
    for (let i = 0; i < array.length; i++) {
        start = func(array[i],start);
    }
    return start;
}