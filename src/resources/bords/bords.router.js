const router = require('express').Router();
const boardsService = require('./bords.service');
const { getStatus } = require('../../utils/router.helpers')

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});


router
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const board = await boardsService.getBoard(id);
    res.status(getStatus(board, 200, 404)).json(board)
  })
  .post('/', async (req, res) => {
    const board = await boardsService.addBoard(req.body)
    res.status(getStatus(board, 201, 404)).json(board)
  })
  .put('/:id', async (req, res) => {
    const { id } = req.params;
    const board = await boardsService.updateBoard(id, req.body)
    res.status(getStatus(board, 200, 404)).json(board)
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await boardsService.deleteBoard(id)
    res.status(getStatus(result, 204, 404)).json(result)
  })

module.exports = router;