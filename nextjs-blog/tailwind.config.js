const colors = require("tailwindcss/colors");

// tailwind.config.js
module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './pages/**/*.js',
        './components/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                violet: colors.violet,
                rose: colors.rose,

            }

        }
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'checked'],
            borderColor: ['checked'],
        }
    },
    // ...
}