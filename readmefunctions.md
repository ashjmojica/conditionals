# Functions

- Functions are pieces of code that you write to do a singular purpose. Do not write functions that do more than one thing. Rather write many functions that do small things.

- The syntax for a function is two ways: one is old, one is new.

## Using the function keyword

```
function nameOfFunction ( arguments/parameters ){
    // body of the function
}

// defining a function

function sumTwoNumbers() {
    return 2 + 4
}

// using a function/calling a function/ invokinga
sumTwoNumbers()
// 6
```

- Using parameters in a function

```
function sumTwoNumbers(num1,num2){
    return num1 + num2
}

sumTwoNumbers(30, -33);
// returns -3
```

## Using the ES6 standard const

```
const functionName = () => {
    console.log("this is my name")
    return "hello"
}
```

```
const printMyName = (name) => {
    return console.log(`this is my ${name}`)
}
```