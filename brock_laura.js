function repeat(fn, n){
    for (let i = 0; i < n; i++){
        fn();
    }
}

function hello(){
    console.log('Hello World');
}

repeat(hello, 5);

function goodbye(){
    console.log('Goodbye Cruel World');
}

repeat(goodbye, 5);
