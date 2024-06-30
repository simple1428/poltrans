import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
            colors: {
                'primary': '#134339',
                'secondary': '#F3B11C',
              },
        },
    },

    plugins: [forms],
};
