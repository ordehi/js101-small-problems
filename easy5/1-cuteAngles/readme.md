# Cute Angles

## Problem Statement

Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (`˚`) to represent degrees, a single quote (`'`) to represent minutes, and a double quote (`"`) to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

## Understanding the Problem

### Mental Model

Given a floating point number representing an angle between 0 and 360 degrees, return a string that represents that angle in degrees (`˚`), minutes (`'`), and seconds (`"`). A degree is 60 minutes and a minute is 60 seconds.

To calculate the degrees, minutes, and seconds:

1. The degrees are the amount before the first decimal point
2. The minutes is the integer product of the value after the decimal point and 60
3. The seconds is the integer product of the value after the decimal point in minutes and 60

minutes = `degrees % 1 * 60`
seconds = `minutes % 1 * 60`

## Examples and Test Cases

```js
dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
```

## Data Structure

Constant symbols object where each property is degree, minute, seconds and their values the corresponding symbols = DEGREE_SYMBOLS

An object to hold values where each property is degree, minute, seconds and their values the corresponding calculations = degreeValues

A function to get minutes or seconds = calculateLower
A function to extract decimal values = getDecimal

## Algorithm

```
START

# Given a floating point number called decimalDegrees

SET DEGREE_SYMBOLS = object of three key-value pairs; degrees: `°`, minutes: `'`, seconds: `"`
SET degreeValues = object with three properties; degrees: decimalDegrees, minutes: degrees % 1 * 60, seconds: minutes % 1 * 60
SET degreeString = empty string
WHILE there are unchecked properties as 'prop' in degreeValues
  degreeString += Math.floor(degreeValues[prop]) + DEGREE_SYMBOLS[prop]

  String(degreeValues[prop]) += DEGREE_SYMBOLS[prop]

RETURN degreeString

END
```
