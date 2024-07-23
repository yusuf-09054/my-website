const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { userEmail, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'smohammedyusuf193@gmail.com',
            pass: 'Yusuf 005'
        }
    });

    let mailOptions = {
        from: 'your_email@gmail.com',
        to: 'smohammedyusuf193@gmail.com', // Replace with your own email address
        subject: subject,
        text: `From: ${userEmail}\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
