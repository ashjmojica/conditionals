# Loops

There are two kinds of loops you need to know. One has two variations of it.

A loop in programming is exactly what it sounds like. It basically loops through the code a specific amount of times. It's like telling a set of instructions to go through it a certain amount of times TILL a condition is met. You often use loops with arrays.

## For loop For..of loop

- The for loop is used most often when we have an array. The idea behind the loop is, as long as there are things in the array, keep doing the code. Once the condition is false, usually, when the array is empty, we stop the loop. A for loop should have a defined stopping point.

- The syntax for a for loop is as follows. Note there are two ways to write a for loop in most programming languages, 3 ways in javascript :(

  ```
  for (let i = 0; i < condition; i++;){
      // your code to repeat goes here
  }

  for (let i = 0; i < 5; i++;){
      console.log("Waah I want milk")
  }

  const students = ["Cameron", "Kimberly", "Ashley", "Daniel", "Justin", "Dustin", "Max", "Fred"]

  for (let i = 0; i < ; i++){
    console.log(students[i])
  }
  ```

  You can also write a for loop like this. It's called a for..of loop

  ```
  const students = ["Cameron", "Kimberly", "Ashley", "Daniel", "Justin", "Dustin", "Max", "Fred"]

    for(let student in students){
        console.log(student)
    }
  ```

## While loop

- While this is true, keep doing the code in the loop
  const joe = "teacher"
  while (joe === "teacher"){
  console.log("What a cool dude")
  }
