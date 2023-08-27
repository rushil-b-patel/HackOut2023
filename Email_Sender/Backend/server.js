
// const express = require("express");
// const dotenv = require("dotenv");
// const emailRoutes = require("./routes/emailRoutes");

// const app = express();
// dotenv.config();

// const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// app.use(cors()); // Use this after the variable declaration

// app.use(express.json()); // tell the server to accept the json data from frontend

// //Signup and login
// app.use("/email", emailRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });



const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const schedule = require('node-schedule'); // Import the node-schedule package
const app = express();
const PORT = 3000;

// Set up your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Sample event data (replace this with your actual event data)
const upcomingEvents = [
  { name: 'Webinar 1', startTime: new Date('2023-08-27T09:25:00') },
  { name: 'Webinar 2', startTime: new Date('2023-08-27T09:24:00') },
];

// Schedule to send emails before 15 minutes of each event
upcomingEvents.forEach(event => {
  const fifteenMinutesBefore = new Date(event.startTime);
  fifteenMinutesBefore.setMinutes(fifteenMinutesBefore.getMinutes() - 15);
  
  schedule.scheduleJob(fifteenMinutesBefore, async () => {
    const mailOptions = {
      from: 'temp11585@example.com',
      to: 'vadiaditi@gmail.com',
      subject: `Webinar Reminder: ${event.name}`,
      text: `Your webinar "${event.name}" is starting in 15 minutes. Don't miss it!`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Reminder email sent for ${event.name}`);
    } catch (error) {
      console.error(`Error sending reminder email for ${event.name}:`, error);
    }
  });
});

// ... Your other routes and server setup

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

