const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📁 Starting image copy process...');

// Source and destination paths
const sourceDir = path.join(__dirname, '..', 'public', 'images');
const destDir = path.join(__dirname, '..', 'out', 'images');

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error('❌ Source images directory not found:', sourceDir);
  process.exit(1);
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
  // Copy images directory
  console.log('📋 Copying images from:', sourceDir);
  console.log('📋 Copying images to:', destDir);
  
  copyRecursiveSync(sourceDir, destDir);
  
  console.log('✅ Successfully copied images directory');
  console.log('📊 Checking copied files...');
  
  // Count files in destination
  const countFiles = (dir) => {
    let count = 0;
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      if (file.isDirectory()) {
        count += countFiles(path.join(dir, file.name));
      } else {
        count++;
      }
    }
    return count;
  };
  
  const fileCount = countFiles(destDir);
  console.log(`📊 Copied ${fileCount} image files successfully`);
  
} catch (error) {
  console.error('❌ Error copying images:', error.message);
  process.exit(1);
}
