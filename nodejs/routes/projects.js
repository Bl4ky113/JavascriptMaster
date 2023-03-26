
const express = require('express');
const ProjectControler = require('../controllers/projects');

const router = express.Router();

router.route('/:id?')
  .get(ProjectControler.get)
  .post(ProjectControler.save)
  .put(ProjectControler.update)
  .delete(ProjectControler.delete);

module.exports = router;
