console.log("Hello via Bun!");

import msg from "./message.txt";
import person from "./db.json";
import prs from "./personal.toml";

console.log(msg);
console.log(person.nama);
console.log(prs.person.name);
