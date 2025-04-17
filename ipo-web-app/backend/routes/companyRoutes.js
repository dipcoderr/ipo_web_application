import express from 'express';
import {
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany
} from '../controllers/companyController.js';

const router = express.Router();

router.get('/', getAllCompanies);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

export default router;
