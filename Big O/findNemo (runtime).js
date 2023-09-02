//This example is provided to give an example of runtime
const nemo = ['nemo'];

//array of characters created to see time difference
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 
'bloat', 'nigel', 'squirt', 'darla', 'hank'];

//creating a very large array to see runtime differ (contains 'nemo' 100 times)
const large = new Array(10000).fill('nemo')

function findNemo(array) {

    //this will be used to see how long the function takes to run
    let t0 = performance.now();

    for(let i =0;i < array.length;i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!')
        }
    }

    //second timer with time to run displayed
    let t1 = performance.now()
    console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds')
}

findNemo(large)