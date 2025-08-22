const fs = require('fs');
const path = require('path');

console.log('📁 Starting image copy process for Netlify deployment...');

// Source and destination paths
const sourceDir = path.join(__dirname, '..', 'public', 'images');
const destDir = path.join(__dirname, '..', 'out', 'images');

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error('❌ Source images directory not found:', sourceDir);
  console.log('ℹ️  This might be expected if you have no images in public/images');
  process.exit(0); // Exit gracefully instead of error
}

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('✅ Created destination directory:', destDir);
}

// Function to copy directory recursively with better error handling
function copyRecursiveSync(src, dest) {
  try {
    const exists = fs.existsSync(src);
    if (!exists) {
      console.warn(`⚠️  Source path does not exist: ${src}`);
      return;
    }
    
    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();
    
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      const items = fs.readdirSync(src, { withFileTypes: true });
      for (const item of items) {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name);
        
        // Skip hidden files and directories
        if (item.name.startsWith('.')) {
          continue;
        }
        
        copyRecursiveSync(srcPath, destPath);
      }
    } else {
      // Copy file
      fs.copyFileSync(src, dest);
      console.log(`✅ Copied: ${path.relative(sourceDir, src)}`);
    }
  } catch (error) {
    console.error(`❌ Error copying ${src}:`, error.message);
  }
}

// Function to count files recursively
function countFiles(dir) {
  let count = 0;
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        count += countFiles(path.join(dir, item.name));
      } else {
        count++;
      }
    }
  } catch (error) {
    console.error(`❌ Error counting files in ${dir}:`, error.message);
  }
  return count;
}

try {
  console.log('📋 Copying images from:', sourceDir);
  console.log('📋 Copying images to:', destDir);
  
  // Clear destination directory first to avoid stale files
  if (fs.existsSync(destDir)) {
    console.log('🧹 Cleaning destination directory...');
    const items = fs.readdirSync(destDir);
    for (const item of items) {
      const itemPath = path.join(destDir, item);
      const stats = fs.statSync(itemPath);
      if (stats.isDirectory()) {
        fs.rmSync(itemPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(itemPath);
      }
    }
  }
  
  // Copy images
  copyRecursiveSync(sourceDir, destDir);
  
  console.log('✅ Image copy process completed');
  console.log('📊 Verifying copied files...');
  
  const fileCount = countFiles(destDir);
  console.log(`📊 Successfully copied ${fileCount} image files`);
  
  if (fileCount === 0) {
    console.log('ℹ️  No images were found to copy. This might be expected.');
  }
  
} catch (error) {
  console.error('❌ Fatal error during image copy process:', error.message);
  process.exit(1);
}
