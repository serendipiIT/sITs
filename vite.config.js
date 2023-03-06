import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      //Detta tar bort varningen: "If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement."
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith('swiper-')
          },
        },
      },
    }),
  ],
})
