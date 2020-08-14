import express from 'express';
import multer from 'multer'
import ClassesController from './controllers/ClassesController';
import CoonnectionsController from './controllers/ConnectionsController';
import  uploads  from'./controllers/UploadsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new CoonnectionsController();




routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

routes.post('/posts', uploads.single('avatar'), (req, res) =>{
  try{
    res.send('Arquivo enviado com sucesso: ' + req.file.filename);
  } catch (error){
    console.log(error);
  }})


export default routes;