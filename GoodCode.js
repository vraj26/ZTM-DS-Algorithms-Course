//This example is provided to give an example of runtime
const nemo = ['nemo'];

function findNemo(array) {
    for(let i =0;i < array.length;i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!')
        }
    }
}

findNemo(nemo)