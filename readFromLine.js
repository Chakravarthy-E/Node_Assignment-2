const readLine = require("node:readline");
const { stdin :input, stdout : output } = require("node:process");
const rl = readLine.createInterface({
  input,
  output,
});
rl.question('Please enter your name :', (name)=>{
    console.log(`hello ${name}`)
    rl.close()
})