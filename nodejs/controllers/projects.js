
const ProjectModel = require('../models/projects');

const ProjectControler = {
  get: async (req, res) => {
    const projectId = req.params.id;

    if ( ! projectId ) { 
      const projectDocs = await ProjectModel.find({})
      if ( projectDocs.length < 1 ) return res.status(404).send({ message: 'Projects not Found' });
      return res.status(200).send({ data: projectDocs, length: projectDocs.length });
    } else {
      const projectDoc = await ProjectModel.findById(projectId);
      if ( !projectDoc ) return res.status(404).send({ message: 'Project Not Found' });
      return res.status(200).send({ data: projectDoc });
    }
  },
  save: async (req, res) => {
    let newProject = await ProjectModel.create(req.body);

    return res.status(200).send({ data: newProject });
  },
  update: async (req, res) => {
    const projectId = req.params.id;
    if ( !projectId ) return res.status(401).send({ message: 'Project Id Required' });

    const projectDoc = await ProjectModel.findByIdAndUpdate(projectId, req.body, { new: true });
    if ( !projectDoc ) return res.status(404).send({ message: 'Project Not Found' });

    return res.status(200).send({ data: projectDoc });
  },
  delete: async (req, res) => {
    const projectId = req.params.id;
    if ( !projectId ) return res.status(401).send({ message: 'Project Id Required' });

    const projectDoc = await ProjectModel.findByIdAndDelete(projectId);
    if ( !projectDoc ) return res.status(404).send({ message: 'Project Not Found' });

    return res.status(200).send({ data: projectDoc });
  }
};

module.exports = ProjectControler;
