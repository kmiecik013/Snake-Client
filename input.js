let connection;

const msg = "Say"
const hello = "Hello there"
const comePlay = "Let's play together"

const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
    
};
const handleUserInput = function () {
  if(key === "\u0003") {
    process.exit();
  }
  if(key === "w") {
    connection.write("Move: up");
  }
  if(key === "a") {
    connection.write("Move: left");
  }
  if(key === "s") {
    connection.write("Move: down");
  }
  if(key === "d") {
    connection.write("Move: right");
  }
  
  
  

}
setupInput()

module.exports = setupInput;