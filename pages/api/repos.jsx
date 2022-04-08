const fetch = require('isomorphic-unfetch')

let key1 = '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';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/xrqujs/repos', {
        headers: {
            Authorization: 'token '+key1
        }
    })).json();

    let __ = await (await fetch('https://api.github.com/users/xlqudev/repos', {
        headers: {
            Authorization: 'token '+key1
        }
    })).json();
    
   
        
            
       
   
    
    try {
        res.send([..._, ...__])
    } catch {
        res.status(500);
    }
}
