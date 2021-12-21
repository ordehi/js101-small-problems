## Problem statement

Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Examples

```
What is your name? Bob
Hello Bob.
```

```
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
```

## Expected Input and Output

### Input:

name
name!

### Output:

lower case greeting
UPPER CASE gretting + WHY ARE WE SCREAMING?

## Explicit Requirements

Return a greeting based on the presence of exclamation mark in the name, if it is, also append "WHY ARE WE SCREAMING?" to the greeting.

## Implicit Requirements

- Flow is controlled by checking if name includes exclamation mark
- Concatenate "WHY ARE WE SCREAMING?" to the upper case greeting.

## Data Structure

- readline-sync for question
- Check if inputName.indexOf('!') === -1
- console.log(`Hello, ${inputName}.`) if not a match
- console.log(`HELLO, ${inputName}. WHY ARE WE SCREAMING?`)

## Algorithm

Step 1: readline-sync question sets inputName
Step 2: Check if inputName.indexOf('!') !== -1
a. if it is, log upper case greeting
b. if it isn't, log normal, lower case greeting
