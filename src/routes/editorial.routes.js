// const router = require('express').Router();
import { Router } from 'express'
const router = Router()

import * as editorial from '../controllers/editorial.controller.js'

// const editorial = require('../controllers/editorial.controller.js');

router.get('/', editorial.list);
router.get('/:ideditorial', editorial.search);
router.post('/add', editorial.save);
router.put('/update/:ideditorial', editorial.edit);
router.delete('/delete/:ideditorial', editorial.deletee);

export default router;