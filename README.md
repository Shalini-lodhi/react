## Tailwind CSS

Install Tailwind CSS with React

**#1 Create project**
```shell
npm create vite@latest
cd my-project
npm i
```
**#2 Install Tailwind**
```shell
npm install tailwindcss @tailwindcss/vite
```
**#3 Configure Tailwind**
Add the **@tailwindcss/vite** plugin to Vite configuration `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [    
    tailwindcss(),
    react()
  ],
})
```
**#4 Import Tailwind CSS**
Add an `@import` to `./app/app.css` that imports Tailwind CSS.
```css
@import "tailwindcss";
```
**#5 Start build process**
```shell
npm run dev
```
