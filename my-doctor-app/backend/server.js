require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'hairclinic',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.post('/api/appointments', (req, res) => {
  const { name, email, phone, service, date } = req.body;

  const query = 'INSERT INTO appointments (name, email, phone, service, date) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, service, date], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error saving appointment');
    }
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mehtaruby1971@gmail.com',
      subject: 'New Appointment Request',
      text: `New appointment details: 
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Date: ${date}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Error sending email:', err);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent:', info.response);
      res.status(200).send('Appointment successfully submitted!');
    });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
