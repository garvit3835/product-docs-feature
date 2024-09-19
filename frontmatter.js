const fs = require("fs").promises;
const path = require("path");
const matter = require("gray-matter");

async function updateMarkdownFiles(directoryPath) {
  try {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        await updateMarkdownFiles(fullPath);
      } else if (
        entry.isFile() &&
        path.extname(entry.name).toLowerCase() === ".md"
      ) {
        await processMarkdownFile(fullPath);
      }
    }
  } catch (err) {
    console.error("Error processing directory:", directoryPath, err);
  }
}

async function processMarkdownFile(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf8");

    // Skip empty files
    if (content.trim() === "") {
      console.log(`Skipping empty file: ${filePath}`);
      return;
    }

    // Parse the content
    const { data, content: markdownContent } = matter(content);

    // Extract title from H1 heading
    const titleMatch = markdownContent.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : "";

    if (title) {
      // Update or add the title in the frontmatter
      data.title = title;

      // Stringify the updated frontmatter and content
      const updatedContent = matter.stringify(markdownContent, data);

      // Write the updated content back to the file
      await fs.writeFile(filePath, updatedContent);
      console.log(`Updated frontmatter in ${filePath}`);
    } else {
      console.log(`No H1 heading found in ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

// Usage
const directoryPath = "./";
updateMarkdownFiles(directoryPath)
  .then(() => {
    console.log("Finished processing all markdown files.");
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });
