require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: 'mysql-32596f0-mehtalirisha48-d4e6.d.aivencloud.com',
  user: 'avnadmin',
  password: process.env.DB_PASSWORD,
  database: 'defaultdb',
  port:'21820'
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
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ...inside your db.query callback, replace the nodemailer code with:
const msg = {
  to: 'mehtaruby1971@gmail.com', // recipient
  from: 'mehtalirisha48@gmail.com', // verified sender in SendGrid
  subject: 'New Appointment Request',
  text: `New appointment details: 
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Service: ${service}
    Date: ${date}`,
};

   sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent via SendGrid');
    res.status(200).send('Appointment successfully submitted!');
  })
  .catch(error => {
    console.error('SendGrid error:', error.response ? error.response.body : error);
    res.status(502).send('Error sending email');
  });
  });
});

app.listen(21820, () => {
  console.log('Server is running on port 21820');
});
