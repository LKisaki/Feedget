module.exports = {
    content: [
        './src/**/*.tsx'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#8257e6',
                    500: '#896DFF',
                }
            },
            borderRadius: {
                ms: '4px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
}