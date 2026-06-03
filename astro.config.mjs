// @ts-check
import { defineConfig } from 'astro/config';
import sst from "astro-sst";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: sst(),
    // site: "https://neansy.com",
});
