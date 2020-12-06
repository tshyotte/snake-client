const net = require('net');
const {IP, PORT} = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    IP,
    PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected');
    conn.write('Name: SNK');
  });
  conn.on('connect', () => {
    console.log('New client connected!');
    conn.write('Say: hello there!');
  });

  return conn;
}
module.exports = {connect};
