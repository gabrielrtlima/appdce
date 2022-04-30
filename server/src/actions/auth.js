const { rc4Base64Encrypt } = require('npm-rc4');

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com',
        password: '123456',
        type: 'user'
    },
    {
        id: 2,
        name: 'Gabriel',
        email: 'gabriel@email.com',
        password: '123456',
        type: 'admin'
    },

]


function doLogin(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find((user) => {
        return user.email === email && user.password === password;
    });

    if (!!user){
        return res.json({
            id: user.id,
            email: user.email,
            type: user.type,
            token: rc4Base64Encrypt(JSON.stringify(user), 'chave')
        });
    }

    return res.status(401).send('Usuário ou senha inválidos');
}

function doRegister(req, res){
    res.send('TODO')
}
function doLogout(req, res){
    res.send('TODO')
}

module.exports = { doLogin, doRegister, doLogout };