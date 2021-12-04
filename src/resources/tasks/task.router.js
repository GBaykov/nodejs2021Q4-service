const router = require('express').Router();
const taskService = require('./task.service');
const { getStatus } = require('../../utils/router.helpers')

router.route('/:boardId/tasks/').get(async (req, res) => {
  const  {boardId} = req.params;
  const tasks = await taskService.getAll(boardId);
  res.json(tasks);
});


router
  .get('/:boardId/tasks/:id', async (req, res) => {
    const { id, boardId } = req.params;
    const task = await taskService.getTask(id, boardId);
    res.status(getStatus(task, 200, 404)).json(task)
  })
  .post('/:boardId/tasks/', async (req, res) => {
    const { boardId } = req.params;
    const task = await taskService.addTask(req.body, boardId);
    res.status(getStatus(task, 201, 404)).json(task)
  })
  .put('/:boardId/tasks/:id', async (req, res) => {
    const { id, boardId } = req.params;
    const task = await taskService.updateTask(id, req.body, boardId);
    res.status(getStatus(task, 200, 404)).json(task)
  })
  .delete('/:boardId/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const result = await taskService.deleteTask(id);
    res.status(getStatus(result, 204, 404)).json(result)
  })

module.exports = router;