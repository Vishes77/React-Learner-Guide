function choice(arr){
    const randinedx  = Math.floor(Math.random()* arr.length);
    return arr[randinedx];
}

export {choice};