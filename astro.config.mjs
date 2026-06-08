// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sst from "astro-sst";

// https://astro.build/config
export default defineConfig({
    site: "https://www.neansy.com",
    output: "server",
    adapter: sst(),
    vite: {
        plugins: [tailwindcss()],
    },
});
