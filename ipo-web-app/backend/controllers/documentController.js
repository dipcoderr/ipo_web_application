import Document from '../models/Document.js';

export const getAllDocuments = async (req, res) => {
  const docs = await Document.find().populate('ipo_id');
  res.json(docs);
};

export const createDocument = async (req, res) => {
  const doc = new Document(req.body);
  await doc.save();
  res.status(201).json(doc);
};

export const updateDocument = async (req, res) => {
  const doc = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doc);
};

export const deleteDocument = async (req, res) => {
  await Document.findByIdAndDelete(req.params.id);
  res.json({ message: 'Document deleted' });
};
