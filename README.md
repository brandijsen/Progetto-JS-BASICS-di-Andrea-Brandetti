# Progetto Javascript Basics di Andrea Brandetti

Hi, in this readme I will show you how I realized this counter application using HTML, CSS and JavaScript.

[Here is the link!](https://brandijsen.github.io/Progetto-JS-BASICS-di-Andrea-Brandetti/){:target="_blank"}

## HTML Structure

We have an app container that includes:

- H1 with the title of the application;
- "counter" div that will contain the counter value;
- "button-container" div cointaing three buttons ("increase", "reset", "decrease").

![Test Image](./assets/images/body.png)

## CSS Style

For this project i chose a minimalist CSS style.
Every text is written in "Poppins" sans-serif bold, and the background color is blue. Title is yellow as the "increase" and "decrease" buttons, "reset" button is red. When a button get hovered his color change. Counter value color is white.

![Test Image](./assets/images/app.png)

## Javascript functions:

- We start defining "updateCounter" function and initializing "counterValue" variable.

![Test Image](./assets/images/setCounterValue.png)

- Increment Function

When the user press the button "+" the counter will rise until he release it.

![Test Image](./assets/images/increment.png)

- Decrement Function

When the user press the button "-" the counter will fall until he release it. Of course, this is possible just if the counter value is higher than 0.

![Test Image](./assets/images/decrement.png)

- Reset Function

When the user press the button "C" the counter will reset its value and it set on 0.

![Test Image](./assets/images/reset.png)
