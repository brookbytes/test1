const fs = require('fs');
const path = require('path');

console.log('🔄 Netlify Post-Build: Copying images...');

const sourceDir = path.join(__dirname, 'public', 'images');
const destDir = path.join(__dirname, 'out', 'images');

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.log('ℹ️  No images directory found, skipping image copy');
  process.exit(0);
}

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('✅ Created destination directory:', destDir);
}

// Function to copy directory recursively
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log('📋 Copying images from:', sourceDir);
  console.log('📋 Copying images to:', destDir);
  
  copyRecursiveSync(sourceDir, destDir);
  
  console.log('✅ Successfully copied images for Netlify deployment');
  
} catch (error) {
  console.error('❌ Error copying images:', error.message);
  process.exit(1);
}
