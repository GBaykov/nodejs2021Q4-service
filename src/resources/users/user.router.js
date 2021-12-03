const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});


router
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await usersService.getUser(id);
    res.json(User.toResponse(user));
  })

module.exports = router;
