import { defineConfig } from "vite"

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'
import {resolve} from 'path';


export default defineConfig({
    base: '/vite-deploy/',
    envPrefix: 'ENV',
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve('index.html'),
                about: resolve(__dirname, 'pages/about/index.html'),
                contacts: resolve(__dirname, 'pages/contacts/index.html'),
            }
        },
    },
    plugins: [
        ViteImageOptimizer({
            jpg: {
                quality: 15
            },
            png: {
                quality: 75
            }
        }),
        createSvgSpritePlugin({
            svgFolder: './assets/images/svg/'
        })
    ]
})
