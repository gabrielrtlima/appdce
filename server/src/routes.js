const express = require('express');
const router = express.Router();
const users = require('../src/actions/users');

const { doLogin, doRegister, doLogout} = require('./actions/auth');
const { doCreateAnnounces, doDateAnnounces, doDeleteAnnounces } = require('./actions/announces');


router.post('/auth/login', doLogin);
router.get('/auth/register', doRegister);
router.get('/auth/logout', doLogout);

router.get('/users', users.getUsers)
router.get('/users/:id', users.getUserById)
router.post('/users/create', users.createUser);
router.put('/users/update/:id', users.updateUser);
router.delete('/users/delete/:id', users.deleteUser);

router.post('/projects/create', doCreateAnnounces);
router.get('/projects/update', doDateAnnounces);
router.get('/projects/delete', doDeleteAnnounces);

module.exports = router