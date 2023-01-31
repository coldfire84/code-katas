# The Challenge

Write a Javascript or Python program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz “.

Sample output:

```
1,2, Fizz, 4, Buzz, Fizz, 7,8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
```

Write automated tests to cover your solution.
Submit your code files in a zip labelled with your name. (Javascript code must have JEST tests, Python code must have PyTest tests)

## Extensions and Constraints to make this harder:

1. Write a solution to the kata without the use of the switch, if, then else, keywords
2. ~~Extend your program so that the client calling your program can change the words “Fizz”, “Buzz”, “FizzBuzz”~~
3. ~~Extend the program so that a new rules engine can be swapped in for the first one, providing the following new rules~~
4. ~~Multiples of four will display "Quad", multiples of 10 will display ("Dec")~~

Hints:

- ~~What design pattern did you use?~~ In comments.
- What design patterns could you have used?

# Install

Assuming you have nodejs installed, extract the files to a directory then execute:

```
npm install
```

# Docs

See [docs](/docs/functions/default.html).

# Test

```
npm run test
```
