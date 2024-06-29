import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/news/",
  commonjsOptions: {
    esmExternals: true,
  },
  //code to solve the error that process is not defined when try to use the .env filr's variables
  define: { "process.env": process.env },
});
