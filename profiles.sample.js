/*
The network(s) which is/are specified in this file will be configured as static.
Every network which is not specified in this file will be configured as DHCP.

To specify a second or third or ... network siply copy the whole code just with another ssid.
*/
module.exports={
  "ssid":{                          //SSID of the network you want to manage
    ip: "192.168.255.255",          //IP address your device should obtain
    mask: "255.255.255.0",          //In most cases the network mask should be this one
    gateway: "192.168.255.255",     //IP address of your main router
    dns: "1.1.1.1",                 //IP address of your primary DNS
    dns2: "1.0.0.1"                 //IP address of your seconday DNS
  }
}
