export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    900: '#0f172a',
                }
            },
            backgroundColor: {
                'glass': 'rgba(15, 23, 42, 0.8)',
            }
        },
    },
    plugins: [],
}
