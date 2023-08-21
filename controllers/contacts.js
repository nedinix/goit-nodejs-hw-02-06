const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
	const result = await Contact.find({}, "-createdAt -updatedAt");
	res.status(200).json({
		code: 200,
		message: "success",
		data: result,
		qty: result.length,
	});
};

const getContactById = async (req, res) => {
	const { contactId } = req.params;
	const result = await Contact.findById(contactId);
	if (!result) throw HttpError(404, "Not found");
	res.status(200).json({
		code: 200,
		message: "success",
		data: result,
	});
};

const addContact = async (req, res) => {
	const result = await Contact.create(req.body);
	res.status(201).json({
		code: 201,
		message: "contact successfully added",
		data: result,
	});
};

const removeContact = async (req, res) => {
	const { contactId } = req.params;
	const result = await Contact.findByIdAndRemove(contactId);
	if (!result) throw HttpError(404, "Not found");
	res.status(200).json({
		code: 200,
		message: "contact successfully deleted",
		data: result,
	});
};

const updateContact = async (req, res) => {
	const { contactId } = req.params;
	const result = await Contact.findByIdAndUpdate(contactId, req.body, {
		new: true,
	});
	if (!result) throw HttpError(404, "Not found");
	res.status(200).json({
		code: 200,
		message: "contact successfully updated",
		data: result,
	});
};

const updateStatusContact = async (req, res) => {
	const { contactId } = req.params;
	const result = await Contact.findByIdAndUpdate(contactId, req.body, {
		new: true,
	});
	if (!result) throw HttpError(404, "Not found");
	res.status(200).json({
		code: 200,
		message: "contact status successfully updated",
		data: result,
	});
};

module.exports = {
	listContacts: ctrlWrapper(listContacts),
	getContactById: ctrlWrapper(getContactById),
	addContact: ctrlWrapper(addContact),
	removeContact: ctrlWrapper(removeContact),
	updateContact: ctrlWrapper(updateContact),
	updateStatusContact: ctrlWrapper(updateStatusContact),
};
