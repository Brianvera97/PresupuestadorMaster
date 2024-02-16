const nodemailer = require("nodemailer");
const handlebars = require("handlebars")
const fs = require("fs/promises")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "bryanverac@gmail.com",
        pass: process.env.EMAIL_SMTP_TOKEN,
    },
    tls: {
        rejectUnauthorized: false
    }
});


module.exports.sendConfirmationEmail = (user) => {
    return new Promise(async (resolve, reject) => {

        try {

            const options = { ...user }
            options.message = "Bienvenido a Proyecto Uno"


            const templateFile = await fs.readFile("./templates/confirmation.hbs", "utf-8")
            const template = handlebars.compile(templateFile)
            const html = template(options)

            const info = await transporter.sendMail({
                from: '"Brian Vera" <bryanverac@gmail.com',
                to: user.email,
                subject: "Welcome to Proyecto uno",
                text: "User Creation",
                html: html
            })
            resolve(info)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

module.exports.sendPasswordToken = ({ user, token }) => {

    return new Promise(async (resolve, reject) => {
        try {
            const options = { ...user };
            options.token = token;

            const templateFile = await fs.readFile("./templates/forgot.hbs", "utf-8");
            const template = handlebars.compile(templateFile);
            const html = template(options);

            const info = await transporter.sendMail({
                from: '"Not Reply Proyecto Uno" <bryanverac@gmail.com>', // sender address
                to: user.email, // list of receivers
                subject: "Password Reset", // Subject line
                text: "Password Reset", // plain text body
                html: html, // html body
            });
            resolve(info);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}