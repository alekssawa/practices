import fs from "fs";
import path from "path";

const ROOT = process.cwd();

// все папки в корне
const dirs = fs.readdirSync(ROOT);

// находим task_N
const taskDirs = dirs
  .map(name => {
    const match = name.match(/^task_(\d+)$/);
    return match ? Number(match[1]) : null;
  })
  .filter((n): n is number => n !== null);

// вычисляем следующий
const next = taskDirs.length > 0 ? Math.max(...taskDirs) + 1 : 1;

const folder = `task_${next}`;
const folderPath = path.join(ROOT, folder);
const srcPath = path.join(folderPath, "src");

// создаём папки
fs.mkdirSync(srcPath, { recursive: true });

// файлы
const mainFile = path.join(srcPath, `${folder}.ts`);
const testFile = path.join(srcPath, `${folder}.test.ts`);

const mainContent = `export default function ${folder}() {
}
`;

const testContent = `import ${folder} from './${folder}';
`;

fs.writeFileSync(mainFile, mainContent);
fs.writeFileSync(testFile, testContent);

console.log(`Created: ${folder}`);
