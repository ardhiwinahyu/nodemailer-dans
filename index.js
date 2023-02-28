const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
});

const sendEmail = (dataUser) => {
	const options = {
		from: "'Ardhi Test Dans' <no-reply@gmail.com>",
		to: dataUser.email,
		subject: dataUser.subject,
		html: dataUser.html,
	};

	transporter.sendMail(options, (error, info) => {
		if (error) {
			console.log(error);
		}

		console.log(`Email telah terkirim ke : ${dataUser.email}`);
	});
};

const dataUser = {
	email: "ardhi.winahyu@gmail.com",
	subject: "Testing email nodemailer",
	html: "<b>Halo ini nodemailer menggunakan tag html</b>",
};

sendEmail(dataUser);
