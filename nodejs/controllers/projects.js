
const ProjectModel = require('../models/projects');
const fs = require('fs');

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
  },
  saveImage: async (req, res) => {
    const projectId = req.params.id;
    if ( !projectId ) return res.status(401).send({ message: 'Project Id Required' });

    const images = req.files.image;
    if ( !images ) return res.status(401).send({ message: 'Image Required' });

    const ACCEPTED_IMAGES_TYPES = ['image/png', 'image/jpg', 'image/jpeg', 'image/webm'];
    const imageNames = [];
    const imageErrors = [];

    for (let image of images ) {
      if ( ACCEPTED_IMAGES_TYPES.includes(image.type) ) {
        imageNames.push(image.path.split('/')[1]);
      } else {
        imageErrors.push('File ' + image.name + ' is not a valid image type');
        fs.unlink(image.path, (error) => {
          if (error) console.error(error);
          console.log(image.path + " Deleted");
        });
      }
    }

    if ( imageNames.length < 1 ) {
      return res.status(401).send({ message: 'None of the Images provided where Accepted Images Types', error: imageErrors })
    }
  
    const projectDoc = await ProjectModel.findByIdAndUpdate(projectId, { image: imageNames }, { new: true });
    if ( !projectDoc ) return res.status(404).send({ message: 'Project Not Found' });

    return res.status(200).send({ data: projectDoc, errors: imageErrors });
  }
};

module.exports = ProjectControler;
