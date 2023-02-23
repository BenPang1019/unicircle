import express from "express"
import productRoutes from "./routes/product.js";
import cors from "cors"
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json({ limit: 9999999 }));

app.use(express.json());

app.use("/api/product",productRoutes)

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'benpang09@gmail.com',
      pass: 'bwrjchhrufyxhmvw'
  }
});

app.post('/api/mail', (req, res, next) => {
  const name = req.body.name
  const phone = req.body.phone
  const email = req.body.email
  const message = req.body.message
  const company = req.body.company
  const designation = req.body.designation

  const mailOptions = {
      from : "benpang09@gmail.com",
      to : "benpang1019@gmail.com",
      subject: 'New Message From unicircle.com.my',
      html: `Name: ${name} <br/> Phone Number: ${phone} <br/> Email: ${email} <br/> Message: ${message} <br/> Company: ${company} <br/> Designation: ${designation}`
  }

  mailTransporter.sendMail(mailOptions, (err, data) => {
    if(err){
          console.log("It has an error",err)
        }else{
          console.log("Send")
        }
  })
})


app.listen(6000, () => {
    console.log("Connected!");
  });