const { Contact } = require("../../models/contact");

const { HttpError, ctrlWrapper } = require("../../helpers");

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

module.exports = ctrlWrapper(getContactById);
