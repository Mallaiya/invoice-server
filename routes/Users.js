const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const pdf = require('html-pdf')
const pdfTemplate = require('./document');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

let ObjectId = require('mongoose').Types.ObjectId; 

let options = { format: 'Letter' };


const User = require('../models/User')
const Invoice = require('../models/Invoice')
const Action = require('../models/Action')
users.use(cors())


process.env.SECRET_KEY = 'secret'

let currentDate = new Date();
  let date = currentDate.getDate();
  
  let month = currentDate.getMonth(); 
  
  let year = currentDate.getFullYear();
  
  let hour = currentDate.getHours().toString();
  if(hour<10){
    hour = '0' + hour;
  }
  let minute = currentDate.getMinutes().toString();
  if(minute<10){
    minute = '0' + minute;
  }
  let second = currentDate.getSeconds().toString();
  if(second<10){
    second = '0' + second;
  }
  let dateString = date +
   "-" +(month + 1) + "-" + year;
  let timeString = hour + ":" + minute + ":" + second;

//User Registeration
users.post('/signup', (req, res) => {
  const userData = {
    userName: req.body.userName,
    emailId: req.body.emailId,
    companyName: req.body.companyName,
    designation : req.body.designation,
    password: req.body.password,
    photo : "null"
  }

  User.findOne({
    emailId : req.body.emailId,
    userName : req.body.userName
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 15, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.emailId + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//User Login
users.post('/login', (req, res) => {
  User.findOne({
    emailId : req.body.emailId
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(req.body.password, user.password)){
        const payload = {
          userName : user.userName,
          emailId : user.emailId,
          companyName : user.companyName,
          designation : user.designation,
          photo : user.photo
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn : 1440
        })
        res.send(token)
      }else{
        res.json({error : 'failure'})
      }
    }else{
      res.json({error : 'invalid'})
    }
  })
  .catch(err => {
    res.send('error : ' +err)
  })
})


//User Photo Update

users.put('/uploadphoto', (req, res) => {
  User.updateOne({emailId : req.body.emailId} , {
    photo : req.body.photo
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send("error" + err);
  })
})

users.post('/getphoto', (req, res) => {
  User.findOne(
    {emailId : req.body.emailId}, 
    {_id : 0, photo : 1}
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send("error" + err);
  })
})

users.post('/create-pdf', (req, res) => {
  //console.log(req.body.invoiceNumber)
  pdf.create(pdfTemplate(req.body), {}).toFile(`${__dirname}/files/`+req.body.invoiceNumber+".pdf", (err) => {
    if(err) {
      return console.log(err);
    }
    console.log(req.body)
    
  });
  pdf.create(pdfTemplate(req.body), {}).toFile(`${__dirname}/result.pdf`, (err) => {
    if(err) {
      return console.log(err);
    }
    console.log(req.body)
    res.send(Promise.resolve());
  });
  // pdf.cr=eate(req.body, options).toFile('./businesscard.pdf', function(err, res) {
  //   if (err) return console.log(err);
  //   console.log(res); // { filename: '/app/businesscard.pdf' }
  // });  

});

users.get('/fetch-pdf', (req, res) => {
  // let dir = `${__dirname}`;
  // dir = dir.substr(0,21);
  console.log(req.query.invoiceNumber);
  res.sendFile(`${__dirname}/result.pdf`) 
})



users.post('/invoice-add', (req, res) => {

  let currentDate = new Date();
  let date = currentDate.getDate();
  
  let month = currentDate.getMonth(); 
  
  let year = currentDate.getFullYear();
  
  let hour = currentDate.getHours().toString();
  if(hour<10){
    hour = '0' + hour;
  }
  let minute = currentDate.getMinutes().toString();
  if(minute<10){
    minute = '0' + minute;
  }
  let second = currentDate.getSeconds().toString();
  if(second<10){
    second = '0' + second;
  }
  let dateString = date +
   "-" +(month + 1) + "-" + year;
  let timeString = hour + ":" + minute + ":" + second;


  const invoiceData = {
    userName: req.body.userName,
    emailId: req.body.emailId,
    companyName: req.body.companyName,
    designation : req.body.designation,
    pdfSrc : req.body.pdfSrc,
    createdDate : dateString,
    createdTime : timeString,
    invoiceName : req.body.invoiceName
  }

  Invoice.create(invoiceData)
  .then(user => {
    res.json({ status: "success" })
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})
  

users.get('/invoice-get', (req, res) => {
  Invoice.find(
    {emailId : req.query.emailId} 
  )
  .then(data => {
    if(data.length!==0){
      res.send(data);
    }else{
      res.send("error");
    }
  })
  .catch(err => {
    res.send("error" + err);
  })
})

users.get('/invoice-get-company', (req, res) => {
  Invoice.find(
    {companyName : req.query.companyName} 
  )
  .then(data => {
    if(data.length!==0){
      res.send(data);
    }else{
      res.send("error");
    }
  })
  .catch(err => {
    res.send("error" + err);
  })
})

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

users.post('/invoice-remove', (req, res) => {
  Invoice.deleteOne({_id : req.body._id.toObjectId()})
  .then(data => {
    res.send(data);
  }) 
})

//Mail transporter
users.post('/send-mail', (req, res) => {
  console.log(req.body.invoiceName);
  let output =  `
    <p>${req.body.mailContent}</p>
  `;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mallaiya@codingmart.com',
      pass: 'Ksrcecse@123'
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Mallaiya" <mallaiya@codingmart.com>', // sender address
    to: `${req.body.receiversMailId}`, // list of receivers
    cc : `${req.body.mailCc}`,
    subject: `${req.body.mailSubject}`, // Subject line
    text: "", // plain text body
    html: output, // html body
    attachments: [
      {
          filename: req.body.invoiceName +'.pdf',                                         
          path : `${__dirname}/files/`+req.body.invoiceName+`.pdf`,
          contentType: 'application/pdf'
      }]
  };

 // console.log(mailOptions);
  
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      res.send(error);
      return console.log(error);
    }else{
      res.send("success");
    }
  

  console.log("Message sent: %s", info.messageId);
  
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  })
})

// Mail sent to the receiver
users.post('/save-actions', (req, res) => {
  let currentDate = new Date();
  let date = currentDate.getDate();
  
  let month = currentDate.getMonth(); 
  
  let year = currentDate.getFullYear();
  
  let hour = currentDate.getHours().toString();
  if(hour<10){
    hour = '0' + hour;
  }
  let minute = currentDate.getMinutes().toString();
  if(minute<10){
    minute = '0' + minute;
  }
  let second = currentDate.getSeconds().toString();
  if(second<10){
    second = '0' + second;
  }
  let dateString = date +
   "-" +(month + 1) + "-" + year;
  let timeString = hour + ":" + minute + ":" + second;
  
  const reqData = {
    userName: req.body.userName,
    emailId: req.body.emailId,
    companyName : req.body.companyName,
    pdfSrc : req.body.pdfSrc,
    createdDate : dateString,
    createdTime : timeString,
    invoiceName : req.body.invoiceName,
    to : req.body.receiversMailId, 
    cc : req.body.mailCc,
    subject: req.body.mailSubject,
    content: req.body.mailContent,
    type : req.body.type,
    reason : req.body.reason
  }
  
    console.log(reqData);
    Action.create(reqData)
    .then(data=> {
      res.send("success"); 
    })
    .catch(err => {
      res.send('error: ' + err)
    })

  })

  users.get('/invoice-action', (req, res) => {
    Action.find(
      {companyName : req.query.companyName} 
    )
    .then(data => {
      if(data.length!==0){
        res.send(data);
      }else{
        res.send(data);
      }
    })
    .catch(err => {
      res.send("error" + err);
    })
  })

module.exports = users
