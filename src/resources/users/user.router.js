const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { getStatus } = require('../../utils/router.helpers')

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});


router
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getUser(id);
    res.status(getStatus(user, 200, 404)).json(user)
  })
  .post('/', async (req, res) => {
    const user = await usersService.addUser(req.body)
    res.status(getStatus(user, 201, 404)).json(user)
  })
  .put('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await usersService.updateUser(id, req.body)
    res.status(getStatus(user, 200, 404)).json(user)
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await usersService.deleteUser(id)
    res.status(getStatus(result, 204, 404)).json(result)
  })

module.exports = router;
