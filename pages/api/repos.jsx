const fetch = require('isomorphic-unfetch') 

let key1 = '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';
let key2 = '91e65076097c64ec331f'; 

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/xrqujs/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json(); 

    let __ = await (await fetch('https://api.github.com/users/xlqudev/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();
    
    try {
        res.send([..._, ...__])
    } catch {
        res.status(500);
    }
}
