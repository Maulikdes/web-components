const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/web-components/runtime-es5.js',
        './dist/web-components/polyfills-es5.js',
        './dist/web-components/scripts.js',
        './dist/web-components/main-es5.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/my-element.js');
    await fs.copyFile('./dist/web-components/styles.css', 'elements/styles.css')    
})()