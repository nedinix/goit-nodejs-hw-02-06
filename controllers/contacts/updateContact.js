const { Contact } = require("../../models/contact");

const { HttpError, ctrlWrapper } = require("../../helpers");

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

module.exports = ctrlWrapper(updateContact);
