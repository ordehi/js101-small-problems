## Problem statement

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example:

```
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
```

## Explicit Requirements

- must construct a story using the provided words
- print story to console

## Implicit Requirements

- must take into account different modes for words, i.e. walk and walks

## Clarifying Questions

- how do you conjugate words? should I?

## Mental Model

Given a noun, verb, adjective, and adverb, build a story that uses them all and print it to the console.

## Validate Examples/Test Cases

boy
sleep
honest
comfortably

The honest boy sleeps comfortably, but sleep isn't comfortably honest for the boy

## Edge Cases

- Non-string
- Different tenses
- Different modes

## Data Structure

- Template literal can hold the story with interpolated inputs, return/print that

## Algorithm

START

-# Given a noun, verb, adjective, and adverb called the same

PRINT prompt('Enter a noun')
GET noun = getUserInput()

PRINT prompt('Enter a verb')
GET verb = getUserInput()

PRINT prompt('Enter an adjective')
GET adjective = getUserInput()

PRINT prompt('Enter an adverb')
GET adverb = getUserInput()

SET story = \`One day, the ${adjective} ${noun} will ${verb} ${adverb}. But as it stands now, the ${noun} isn't ${adjective} enough to ${verb} ${adverb}.\`

PRINT story

END
