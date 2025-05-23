import { readdirSync } from 'fs';
import { join, relative } from 'path';

interface GeneratedCode {
  imports: string;
  exports: string;
}

interface FileEntry {
  name: string;
  isDirectory: () => boolean;
  isFile: () => boolean;
}

export function fileComment(filename: string): string {
  return `/**
 * This file is generated. Do not modify this file.
 * It was generated at build time of the app, via pnpm dev or pnpm build.
 * It was generated by the file ${filename}.
 * It was last generated at ${new Date().toUTCString()}.
 */`;
}

/**
 * Generate import statements and export them.
 */
export function getImportsAndExports(
  basePath: string,
  filePattern: RegExp,
  importId: string,
  importAliasId: string,
  exportConstName: string,
  outputDirectory: string,
): GeneratedCode {
  const files = readDirs(basePath, filePattern);

  const imports = files
    .map(
      (file, index) =>
        `import { ${importId} as ${importAliasId}${index} } from '${getRelativeImportPath(file, outputDirectory)}';`,
    )
    .join('\n');

  const exports = `
export const ${exportConstName} = [${files.map((_, index) => `\n  { ${importId}: ${importAliasId}${index} }\n`).join(', ')}];
`;

  return {
    imports,
    exports,
  };
}

/**
 * Generate relative import path from the output path
 */
function getRelativeImportPath(fullPath: string, outputPath: string): string {
  const relativePath = relative(outputPath, fullPath);
  return `./${relativePath.replace(/\\/g, '/').replace(/\.ts$/, '')}`; // Normalize for Unix-like paths and remove .ts
}

/**
 * Function to recursively read directories based on a specified pattern.
 */
function readDirs(baseDir: string, pattern: RegExp): string[] {
  const results: string[] = [];
  const entries = readdirSync(baseDir, { withFileTypes: true });

  entries.forEach((entry: FileEntry) => {
    const fullPath = join(baseDir, entry.name);
    if (entry.isDirectory()) {
      results.push(...readDirs(fullPath, pattern));
    } else if (entry.isFile() && entry.name.match(pattern)) {
      results.push(fullPath);
    }
  });

  return results;
}
