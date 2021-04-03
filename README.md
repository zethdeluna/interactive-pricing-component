# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshots

<img src="https://raw.githubusercontent.com/zethdeluna/interactive-pricing-component/main/src/images/ipc-desktop-screenshot.png" alt="desktop screenshot">
<img src="https://raw.githubusercontent.com/zethdeluna/interactive-pricing-component/main/src/images/ipc-mobile-screenshot.png" alt="mobile screenshot" width="300">

### Links

- [Solution Code](https://www.frontendmentor.io/solutions/interactive-pricing-component-using-react-js-and-scss-CoR1sexf9)
- [Live site](https://zethdeluna.github.io/interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties and styles
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

My key takeaway from doing this project was learning how to build a custom range slider using CSS (SCSS) and a touch of JavaScript. The styling of the slider was fairly straightforward, but I had a lot of fun trying to figure out how to add a "progress" feature to the slider (i.e. the slider track on the left side of the slider thumb becomes a different color when moved further down the track). Firefox and Internet Explorer had built in styles for this, but I was surprised that the 2 most used browsers, Google Chrome and Safari, had no easy way to add a progress color to the slider. I spent hours on Google and Stack Overflow trying to find a way to display this progress feature on webkit browsers (Chrome and Safari).

My solution to adding a progress feature to the range slider on webkit browsers ended up being incredibly simple. I placed an empty `span` element on top of the range slider and used React Hooks to set its length based on the position of the slider.

```javascript
const progressRef = useRef();
useEffect(() => {
    const val = option / 4;
    const pixels = val * 405;

    progressRef.current.style.width = `${pixels}px`;
});
```
I used `React.useRef()` to refer to the `span`. Then, within the `useEffect()` hook I calculate the percentage that the slider thumb as moved down the slider and multiplied that by the length of the slider minus the width of the thumb. This would give the correct length of the slider progress. Some screenshots of the resulting slider are shown below:

<img src="https://raw.githubusercontent.com/zethdeluna/interactive-pricing-component/main/src/images/slider-0.png">
<img src="https://raw.githubusercontent.com/zethdeluna/interactive-pricing-component/main/src/images/slider-half.png">
<img src="https://raw.githubusercontent.com/zethdeluna/interactive-pricing-component/main/src/images/slider-full.png">

## Author

- Website - [Zeth De Luna](https://zethdeluna.com)
- Frontend Mentor - [@zethdeluna](https://www.frontendmentor.io/profile/zethdeluna)
