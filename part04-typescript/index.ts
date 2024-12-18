import { run } from "app";

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Bun"));

run();
