# Weekend JQuery Server Calculator

## Description

- Your project description goes here. 

This is a basic calculator that takes input data from input forms and operator buttons, POST's that data to a server, does basic math functions, and GET's that data back to the client side and appends that data as answer to the equation and appends a history of equations.

- What problem did you solve? How did you solve it?

There were two problems that I had difficulty solving.
    - running a function to do the actual math equations and returning the result. I solved this by accessing the 'operator' value of my object and running logic that compared the operator to +, -, *, or /. The logic wasn't difficult to write, but thinking through the correct way to access the specific properties of objects in an array took me some time. I figured out that I would always need to access the last object in the array as every time a new equation was run it would be added to the object array. 

    - appending the history data to the DOM in a way that added each equation to the history AND kept the history if the page was refreshed. This actually took more time than the entire rest of the project. At first I had a separate GET written to send the history back to the client side but erased it and made appending the history part of my computeMath function. This worked in every way EXCEPT being able to keep the data on the DOM when the page was refreshed. Realizing this, I rewrote a function/GET for appending the history. I tried appending directly to the DOM in the function, for of loops, and for loops but was not having any success. After dozens of iterations I figured out how to get my entire array of strings(that had been returned from the server) appended to the DOM, and after a few more tries realized my loop need to end in i+=2 (NOT i++) in order to append every other string to the DOM (which in this case was all the equations).

    - as a side note, an important thing I learned in this project is object data manipulation. For instance, realizing that my object was being POSTed to the server as an array of objects, but it was being returned in the GET as an array of strings. Recognizing this helped me access these objects accordingly.




Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
