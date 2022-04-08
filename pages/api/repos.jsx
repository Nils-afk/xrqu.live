const fetch = require('isomorphic-unfetch')

let key1 = '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';
let key2 = 'ed52ebd3d42b6f4f1723';

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
    
    let ___ = await (await fetch('https://api.github.com/users/zackbeydev/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();
    
    try {
        res.send([..._, ...__, ...___])
    } catch {
        res.status(500);
    }
}
