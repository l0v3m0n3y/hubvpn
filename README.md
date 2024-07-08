# hubvpn
JavaScript library for hub-vpn.com
# main
```js
async function main(){
    const {hubvpn} = require('./hubvpn');
    const vpn= new hubvpn();
    let req=await vpn.ip_list()
    console.log(req)
}
main()
```
