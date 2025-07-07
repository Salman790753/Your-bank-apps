import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about:resolve(__dirname, "about.html"),
                careers:resolve(__dirname, "careers.html"),
                security:resolve(__dirname, "security.html"),
                login:resolve(__dirname, "login.html"),
                signup:resolve(__dirname, "signup.html"),
            }
        }
    }
})