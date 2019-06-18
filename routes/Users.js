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
users.use(cors())

process.env.SECRET_KEY = 'secret'


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

})

users.get('/fetch-pdf', (req, res) => {
  // let dir = `${__dirname}`;
  // dir = dir.substr(0,21);
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


// users.post('/send-mail', (req, res) => {
//   const output =  `
//     <p>Hi I am checking mail</p>
//   `;
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'sylvia79@ethereal.email', // generated ethereal user
//       pass: 'U9STqvQzt45vGsRPxE' // generated ethereal password
//     }
//   });

//   // send mail with defined transport object
//   let mailOptions = {
//     from: '"Nodemailer Contact" <sylvia79@ethereal.email>', // sender address
//     to: "mallaiyazap@gmail.com", // list of receivers
//     subject: "Node Mail", // Subject line
//     text: "Checking node mail", // plain text body
//     html: output // html body
//   };
  
//   transporter.sendMail(mailOptions, (error, info) => {
//     if(error) {
//       return console.log(error);
//     }
  

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   })
// })


module.exports = users
