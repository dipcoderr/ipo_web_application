import Ipo from '../models/Ipo.js';

export const getAllIPOs = async (req, res) => {
  const ipos = await Ipo.find().populate('company_id');
  res.json(ipos);
};

export const createIPO = async (req, res) => {
  const ipo = new Ipo(req.body);
  await ipo.save();
  res.status(201).json(ipo);
};

export const updateIPO = async (req, res) => {
  const ipo = await Ipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(ipo);
};

export const deleteIPO = async (req, res) => {
  await Ipo.findByIdAndDelete(req.params.id);
  res.json({ message: 'IPO deleted' });
};
