# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

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

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
