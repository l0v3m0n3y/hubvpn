class hubvpn{
    constructor(){
        this.api = "https://s3.hub-vpn.com"
        this.api_2 = "https://ip.freeconnect.link"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async ip_list(){
        let req=await fetch(`${this.api}/servers.json`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async my_ip(){
        let req=await fetch(`${this.api_2}/json`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {hubvpn};