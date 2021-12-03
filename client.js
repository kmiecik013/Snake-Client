const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port:50541,
  });  
  conn.setEncoding("utf8");
  conn.on('connect', () =>{
    console.log('Success im in the server');
    conn.write('Name: MK');
  
    (() => {
    conn.write("Move: up");
   }, 500);
  
  
  });
  return conn;
  };
  
module.exports = connect;

  // interpret incoming data as text






/*conn.on('connect', () => {
    setTimeout(() => {
       process.stdout.write(conn.write('Move: up'), 50); 
    })   
    setTimeout(() => {
        process.stdout.write(conn.write('Move: up'), 100); 
    })
    setTimeout(() => {
        process.stdout.write(conn.write('Move: up'), 150); 
      
    })
    */