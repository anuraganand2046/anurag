const fs= require("fs");
fs.writeFileSync("read.txt", "Anurag Anand");
fs.appendFileSync("read.txt", " Ritul Anand");
const p= fs.readFileSync("read.txt");
q= p.toString();
console.log(q);
