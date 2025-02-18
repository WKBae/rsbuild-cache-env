import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    html: {
        template: 'src/index.html',
    },
    performance: {
        buildCache: true,
    },
});
