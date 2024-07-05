# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-).

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
        - [Flip Animation](#flip-animation)
   -   [Resources](#resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

Users should be able to:

-   See hover states for all interactive elements on the page
-   See a live countdown timer that ticks down every second (start the count at 14 days)
-   When a number changes, make the card flip from the middle

Links:

- GitHub Repo: <https://github.com/xup60521/react-countdown-timer>
- Live website: <https://xup60521.github.io/react-countdown-timer/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

-   React (powered by vite)
-   TailwindCSS

### What I learned

#### Flip animation

The flip animation is the most challenging piece in this project. For a flipping digit, it has 4 parts:

-   upper half preview state
-   upper half next state
-   lower half preview state
-   lower half next state

Upper half next state & Lower half preview state don't require animation. While upper half preview state flips from top to middle, and lower half next state flips from middle to bottom.

The animation part can be defined in `tailwind.config.js`, here we do some tricks. Even though it is a 'flip animation', it turns out that by simply scale at Y axis, it looks very similar to a flip animation.

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                uptomiddle: {
                    "0%": {
                        transform: "scaleY(100%)",
                    },
                    "100%": {
                        transform: "scaleY(0%)",
                    },
                },
                middletobottom: {
                    "0%": {
                        transform: "scaleY(0%)",
                    },
                    // because lower half animation is perform after upper half, it needs some delay.
                    "50%": {
                        transform: "scaleY(0%)",
                    },
                    "100%": {
                        transform: "scaleY(100%)",
                    },
                },
            },
            animation: {
                uptomiddle: "uptomiddle 0.15s ease-out 0s forwards",
                // 0.15s vs. 0.3s
                // because of the delay at 50%, it needs double the time `uptomiddle` required.
                middletobottom: "middletobottom 0.3s ease-out 0s forwards",
            },
        },
    },
    plugins: [],
};
```

For a digit display, define a component:
```tsx
export default function DigitDisplay(props: { prev: number; next: number }) {
    const { prev, next } = props;
    return (
        <div className="w-full aspect-square relative text-[min(5rem,10vw)]">
            {/* upper half */}
            <div className="rounded-xl absolute aspect-[2/1] w-full bg-c_dark_desaturated_blue brightness-75 text-c_soft_red overflow-hidden">
                {/* upper half next state, don't need animation */}
                <div
                    key={`up to ${next}`}
                    className="w-full absolute aspect-square top-0 bg-c_dark_desaturated_blue text-c_soft_red flex justify-center items-center"
                >
                    {next}
                </div>
                {/* upper half prev state, flip from top to middle */}
                <div
                    key={`up from ${prev}`}
                    className="w-full animate-uptomiddle absolute bg-c_dark_desaturated_blue aspect-square top-0 text-c_soft_red flex justify-center items-center"
                >
                    {prev}
                </div>
            </div>
            {/* lower half */}
            <div className="rounded-xl absolute aspect-[2/1] top-[50%] w-full bg-c_dark_desaturated_blue text-c_soft_red overflow-hidden">
                {/* lower half next state, flip from middle to bottom */}
                <div
                    key={`bottom to ${next}`}
                    className="w-full aspect-square absolute bottom-0 bg-c_dark_desaturated_blue text-c_soft_red z-10 animate-middletobottom flex justify-center items-center"
                >
                    {next}
                </div>
                {/* lower half prev state, don't need animation */}
                <div
                    key={`bottom from ${prev}`}
                    className="w-full aspect-square absolute bottom-0 bg-c_dark_desaturated_blue text-c_soft_red flex justify-center items-center"
                >
                    {prev}
                </div>
            </div>
        </div>
    );
}

```

The 'half' display is achieved using `absolute` and `overflow-hidden`. As for the animation, whenever the digit change, it will do a flip animation.

Since react is smart enough that if `prev` and `next` stay the same values, it won't rerender, thus they won't perform a flip animation.

### Resources

- Google font - https://fonts.google.com

- TailwindCSS Docs - https://tailwindcss.com/docs
