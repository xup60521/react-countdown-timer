/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_grayish_blue: "hsl(237, 18%, 59%)",
                c_soft_red: "hsl(345, 95%, 68%)",
                c_dark_desaturated_blue: "hsl(236, 21%, 26%)",
                c_very_dark_blue: "hsl(235, 16%, 14%)",
                c_black_blue: "hsl(234, 17%, 12%)",
                c_purple: "#2d2438"
            },
            fontFamily: {
                red_hat: ["Red Hat Text", "sans-serif"]
            },
            keyframes: {
                "uptomiddle": {
                    "0%": {
                        transform: "scaleY(100%)"
                    },
                    "100%": {
                        transform: "scaleY(0%)"
                    }
                },
                "middletobottom": {
                    "0%": {
                        transform: "scaleY(0%)"

                    },
                    "50%": {
                        transform: "scaleY(0%)"
                    },
                    "100%": {
                        transform: "scaleY(100%)"
                    }
                }
            },
            animation: {
                "uptomiddle": "uptomiddle 0.15s ease-out 0s forwards",
                "middletobottom": "middletobottom 0.3s ease-out 0s forwards",

            }
        },
    },
    plugins: [],
}

