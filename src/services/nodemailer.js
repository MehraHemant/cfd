// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     tls: {
//         ciphers: "SSLv3",
//         rejectUnauthorized: false,
//     },

//     auth: {
//         user: "info@chaltifirtidukaan.com",
//         pass: 'jpflkwazinxgddwy'
//     }
// });


// export const sendMail = async (to, subject, text) => {
//     try {
//         await transporter.sendMail({
//             from: 'info@chaltifirtidukaan.com',
//             to,
//             subject,
//             text,
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };