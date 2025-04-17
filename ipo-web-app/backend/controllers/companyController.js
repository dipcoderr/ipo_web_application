import Company from '../models/Company.js';

export const getAllCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

export const createCompany = async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(201).json(company);
};

export const updateCompany = async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(company);
};

export const deleteCompany = async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  res.json({ message: 'Company deleted' });
};
