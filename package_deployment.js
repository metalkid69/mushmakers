const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');

const PROJECT_ROOT = __dirname;
const STANDALONE_DIR = path.join(PROJECT_ROOT, '.next', 'standalone');
const OUTPUT_ZIP = path.join(PROJECT_ROOT, 'mushmakers_deploy.zip');

async function packageApp() {
    console.log('📦 Starting packaging process...');

    // 1. Copy public folder
    const publicSrc = path.join(PROJECT_ROOT, 'public');
    const publicDest = path.join(STANDALONE_DIR, 'public');
    if (fs.existsSync(publicSrc)) {
        console.log('Requesting public folder copy...');
        await fs.copy(publicSrc, publicDest);
        console.log('✅ Public folder copied.');
    }

    // 2. Copy .next/static folder
    const staticSrc = path.join(PROJECT_ROOT, '.next', 'static');
    const staticDest = path.join(STANDALONE_DIR, '.next', 'static');
    if (fs.existsSync(staticSrc)) {
        console.log('Requesting .next/static folder copy...');
        await fs.copy(staticSrc, staticDest);
        console.log('✅ .next/static folder copied.');
    }

    // 3. Create Zip
    const output = fs.createWriteStream(OUTPUT_ZIP);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', function () {
        console.log(`✅ Deployment package created: ${OUTPUT_ZIP} (${archive.pointer()} bytes)`);
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);

    // Append files from standalone directory
    archive.directory(STANDALONE_DIR, false);

    await archive.finalize();
}

packageApp().catch(console.error);
