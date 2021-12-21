## Problem statement

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

Example:

```
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
```

## Expected Input and Output

### Input:

array (2 or more elements)
object (2 keysl title, occupation with appropriate values)

["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }

### Output:

A greeting that contains the person's full name and mentions their title

Hello, John Q Doe! Nice to have a Master Plumber around.

## Explicit Requirements

- Join the name
- Invoke the object properties and concatenate them
- Return output greeting as a string

## Mental Model

The function takes in a name as an array of strings where each element is a word in the name in order, and takes an object with properties title and occupation which describe the person's job. It returns a greeting that mentions the person's full name and job.

## Data Structure

- Use Array.join(' ') to join the name of the person with spaces.
- Concatenate Object.title and Object.occupation to log the title
- You can do these using template literals

## Algorithm

Step 1: Declare function greetings, takes in arguments "nameArray" and "jobObject"
Step 2: function uses console.log with template literals to returns a greeting where nameArray is joined with spaces, and the properties of jobObject are concatenated.
