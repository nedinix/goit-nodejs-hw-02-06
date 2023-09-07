const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const regexp = { email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ };

const userSchema = new Schema(
	{
		password: {
			type: String,
			required: [true, "Set password for user"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		subscription: {
			type: String,
			enum: ["starter", "pro", "business"],
			default: "starter",
		},
		token: {
			type: String,
			default: null,
		},
		avatarURL: {
			type: String,
		},
		verify: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: String,
			required: [true, "Verify token is required"],
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
	email: Joi.string()
		.pattern(regexp.email)
		.required()
		.messages({ "any.required": "missing required field email" }),
	password: Joi.string()
		.min(6)
		.required()
		.messages({ "any.required": "missing required field password" }),
});

const emailSchema = Joi.object({
	email: Joi.string()
		.pattern(regexp.email)
		.required()
		.messages({ "any.required": "missing required field email" }),
});

const loginSchema = Joi.object({
	email: Joi.string()
		.pattern(regexp.email)
		.required()
		.messages({ "any.required": "missing required field email " }),
	password: Joi.string()
		.min(6)
		.required()
		.messages({ "any.required": "missing required field password " }),
});

const subscriptionSchema = Joi.object({
	subscription: Joi.string()
		.valid("starter", "pro", "business")
		.required()
		.messages({ "any.required": "missing data" }),
});

const schemas = {
	registerSchema,
	emailSchema,
	loginSchema,
	subscriptionSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
