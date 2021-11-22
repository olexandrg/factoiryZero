const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

// place holder for the data
// leave this const alone for now
const users = [
  {
    id: "1",
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    id: "2",
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    id: "3",
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

// leave this alone; default users data will be deleted later
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));

app.get('/api/users', (req, res) => {
  console.log('api/users called')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

// placeholder for factory tools
const tools = [
  {
    bin: "MFG133A",
    customer: "TSMC",
    type: "Sabre 3D",
    sn: "001"
  },
  {
    bin: "MFG134B",
    customer: "Intel",
    type: "Gamma XPR",
    sn: "335"
  }
];

app.get('/api/tools', (req, res) => {
  console.log('api/tools called')
  res.json(tools);
});

// placeholder for error reports

const reports = [
  {
    bin: "MFG133A",
    fault: "Sample fault report.",
    status: "Review Required",
    dateAdded: "11/10/2021"
  }
]

app.get('/api/reports', (req, res) => {
  console.log('api/reports called')
  res.json(reports);
});

app.post('/api/reports', (req, res) => {
  const report = req.body.report;
  console.log('Adding report: ', report);
  reports.push(report);
  res.json("report added");
});

// required binders for server; leave alone
app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});