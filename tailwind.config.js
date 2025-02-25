/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');
const { breakpoints } = require('./src/assets/config/breakpoints');
module.exports = {
    darkMode: ['selector', '[class="app-dark"]'],
    content: ['./src/**/*.{html,ts,scss,css}', './index.html'],
    plugins: [primeui],
    theme: {
        screens: {
            sm: breakpoints.sm,
            md: breakpoints.md,
            lg: breakpoints.lg,
            xl: breakpoints.xl,
            '2xl': breakpoints['2xl']
        },
        extend: {
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'wave': 'wave 12s linear infinite',
                'blob': 'blob 20s infinite alternate',
                'soft-drift': 'softDrift 25s linear infinite',
                'particles': 'particleFlow 15s linear infinite'
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                wave: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                blob: {
                    '0%': { d: 'path("M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z")' },
                    '50%': { d: 'path("M180.312 46.4879C196.582 72.1187 191.309 112.826 172.328 144.186C153.346 175.547 120.807 197.559 90.226 196.353C59.6454 195.297 31.0228 171.023 11.7403 139.362C-7.54225 107.851 2.48481 69.1033 16.6758 44.5279C30.9871 20.1032 69.7028 9.85087 107.967 10.0016C146.23 10.3032 184.193 20.857 200.312 46.4879Z")' },
                    '100%': { d: 'path("M200.312 26.4879C216.582 52.1187 211.309 92.826 192.328 124.186C173.346 155.547 140.807 177.559 110.226 176.353C79.6454 175.297 51.0228 151.023 31.7403 119.362C12.4578 87.8511 2.51519 49.1033 16.6758 24.5279C30.9871 0.103176 69.7028 -10.1491 107.967 -9.99836C146.23 -9.69682 184.193 0.857047 200.312 26.4879Z")' }
                },
                softDrift: {
                    '0%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(2px, -2px)' },
                    '50%': { transform: 'translate(-1px, 1px)' },
                    '75%': { transform: 'translate(-2px, 2px)' },
                    '100%': { transform: 'translate(0, 0)' }
                },
                particleFlow: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(-100%)' }
                }
            }
        }
    }
};
