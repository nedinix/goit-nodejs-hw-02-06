const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;
const defaultEmail = "nedinix.tech@gmail.com";

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
	const email = { ...data, from: defaultEmail };
	await sgMail.send(email);
	return true;
};

// const email = {
// 	to: "sorap55909@searpen.com",
// 	from: "nedinix.tech@gmail.com",
// 	subject: "Test mail",
// 	html: "<p> test mail from localhost:5050",
// };

// sgMail
// 	.send(email)
// 	.then(() => console.log("email send success"))
// 	.catch((e) => console.log(e.message));

module.exports = sendEmail;
