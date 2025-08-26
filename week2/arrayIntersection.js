function intersection(arr1, arr2) {
    let result = [];


    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];
        let existsInArr2 = false;
        let existsInResult = false;

        
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === element) {
                existsInArr2 = true;
                break; 
            }
        }

        
        for (let k = 0; k < result.length; k++) {
            if (result[k] === element) {
                existsInResult = true;
                break; 
            }
        }

        
        if (existsInArr2 && !existsInResult) {
            result.push(element);
        }
    }

    return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); 

