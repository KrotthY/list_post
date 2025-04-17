import { Router } from 'express'
import { CreateNewPublication, DeletePublication, GetPublications, UpdatePublication } from '../app/create_publication.js';
import { createPublicationDto } from '../app/dto/publication_dto.js';
import { validateDto } from '../../shared/middleware/validate_dto.js';
const router = Router();

//get
router.get('/publication', GetPublications)
// post
router.post('/publication',validateDto(createPublicationDto),CreateNewPublication)
//put
router.put('/publication/:id',validateDto(createPublicationDto),UpdatePublication)
//delete
router.delete('/publication/:id',DeletePublication)
export default router