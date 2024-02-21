const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	OrganizationName: { type: String, required: true },
	Type: { type: String, required: true },
	userid: { type: String, required: true },
	password: { type: String, required: true },
});


const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		OrganizationName: Joi.string().required().label("OrganizationName"),
		Type: Joi.string().required().label("type"),
        userid:Joi.string().required().label("userid") ,
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
