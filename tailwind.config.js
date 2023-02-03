const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("@tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily: {
            primary: "Playfair Display",
            body: "Work Sans"
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem"
            },
        },
        extend: {
            colors: {
                "ligth-primary": "#FAF1E6",
                "ligth-secondary": "#FDFAF6",
                "ligth-primary": "#A9DED2",
                "ligth-primary": "#54BAB9",
                "dark-primary": "#050402",
                "dark-secondary": "#1C1D24",
                "dark-navy": "#07567D",
                "dark-navy": "#292D42",
                accept: {
                    DEFAULT: "#ac6b34",
                    hover: "#925a2b",
                },
                paragraph: "#878e99",
                blue: colors.blue,
                indigo: colors.indigo,
                green: colors.green,
                red: colors.red,
            },
        }
        
    },

    plugins: [require('@tailwindcss/forms')],
};
