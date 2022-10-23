// const router = require('express').Router();
import { Router } from 'express'
const router = Router()

import * as libro from '../controllers/libro.controller.js'

// const libro = require('../controllers/libro.controller.js');

router.get('/', libro.list);
router.get('/:idlibro', libro.search);
router.post('/add', libro.save);
router.put('/update/:idlibro', libro.edit);
router.delete('/delete/:idlibro', libro.deletee);

export default router;