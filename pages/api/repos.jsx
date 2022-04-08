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
