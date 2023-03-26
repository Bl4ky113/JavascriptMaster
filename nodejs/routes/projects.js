
const express = require('express');
const ProjectControler = require('../controllers/projects');
const multipart = require('connect-multiparty');

const router = express.Router();

const multipartMiddleware = multipart({ uploadDir: './local' });

router.route('/:id?')
  .get(ProjectControler.get)
  .post(ProjectControler.save)
  .put(ProjectControler.update)
  .delete(ProjectControler.delete);

router.route('/file/:id?')
  .post(multipartMiddleware, ProjectControler.saveImage);

module.exports = router;
