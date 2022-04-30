const express = require('express');
const routes = require('./src/routes.js');
const { rc4Base64Decrypt } = require('npm-rc4');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1', routes);

app.use((req, res, next) => {
    const token = req.headers.authorization;

    if(!!token){
        const decryptedUser = rc4Base64Decrypt(token, 'chave')

        req.user = JSON.parse(decryptedUser);
        req.isLogged = true

        return next();
    }

    req.isLogged = false;
    return next();
});

app.get('/', (req, res) => {
    if (req.isLogged){
        const user  = req.user
        console.log(user);
        return res.send(`Olá ${user.name}, você está logado e é do tipo: ${user.type}`);
    }

    return res.send('Não está logado!')
});


app.use('api/v1', routes);

app.listen(80, () => {
    console.log('Server running on port 80');
})
