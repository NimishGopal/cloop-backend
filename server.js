const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db');
const {Testyytyyt} = require('./Models/testyytyyt.js');
const {Lacasa} = require('./Models/lacasa.js');
const {Moto} = require('./Models/moto.js');
const {Mototo} = require('./Models/mototo.js');

var app = express();
const port = process.env.PORT || 4000;

//MiddleWare
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/lacasa', function (req, res) {
  Lacasa.find().then((lacasa) => {
    res.send(lacasa);
  }, (e) => {
    res.status(400).send(e);
  });
})

app.get('/testyytyyt', function (req, res) {
  Testyytyyt.find().then((testyytyyt) => {
    res.send(testyytyyt);
  }, (e) => {
    res.status(400).send(e);
  });
})

app.get('/moto', function (req, res) {
  Moto.find().then((moto) => {
    res.send(moto);
  }, (e) => {
    res.status(400).send(e);
  });
})

app.get('/mototo', function (req, res) {
  Mototo.find().then((mototo) => {
    res.send(mototo);
  }, (e) => {
    res.status(400).send(e);
  });
})

app.post('/testyytyyt', (req, res) => {
  var testyytyyt = new Testyytyyt(req.body);
  testyytyyt.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
app.post('/lacasa', (req, res) => {
  var lacasa = new Lacasa(req.body);
  lacasa.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
app.post('/moto', (req, res) => {
  var moto = new Moto(req.body);
  moto.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
app.post('/mototo', (req, res) => {
  var mototo = new Mototo(req.body);
  mototo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// app.post('/testyytyyt', (req, res) => {
//     console.log(req.body);
//     const {contestname, startdate, enddate, link, status, createdby, noofposts, lastactivity} = req.body;
//     tableData('testyytyyt').insert({
//       contestname: req.body.contestname,
//       startdate: req.body.startdate,
//       enddate: req.body.enddate,
//       link: req.body.link,
//       status: req.body.status,
//       createdby: req.body.createdby,
//       noofposts: req.body.noofposts,
//       lastactivity: req.body.lastactivity
//     }).then(res.send('success'));
// })
//
// app.post('/lacasa', (req, res) => {
//     console.log(req.body);
//     const {contestname, startdate, enddate, link, status, createdby, noofposts, lastactivity} = req.body;
//     tableData('lacasa').insert({
//       contestname: req.body.contestname,
//       startdate: req.body.startdate,
//       enddate: req.body.enddate,
//       link: req.body.link,
//       status: req.body.status,
//       createdby: req.body.createdby,
//       noofposts: req.body.noofposts,
//       lastactivity: req.body.lastactivity
//     }).then(res.send('success'));
// })
// app.post('/moto', (req, res) => {
//     console.log(req.body);
//     const {contestname, startdate, enddate, link, status, createdby, noofposts, lastactivity} = req.body;
//     tableData('moto').insert({
//       contestname: req.body.contestname,
//       startdate: req.body.startdate,
//       enddate: req.body.enddate,
//       link: req.body.link,
//       status: req.body.status,
//       createdby: req.body.createdby,
//       noofposts: req.body.noofposts,
//       lastactivity: req.body.lastactivity
//     }).then(res.send('success'));
// })
// app.post('/mototo', (req, res) => {
//     console.log(req.body);
//     const {contestname, startdate, enddate, link, status, createdby, noofposts, lastactivity} = req.body;
//     tableData('mototo').insert({
//       contestname: req.body.contestname,
//       startdate: req.body.startdate,
//       enddate: req.body.enddate,
//       link: req.body.link,
//       status: req.body.status,
//       createdby: req.body.createdby,
//       noofposts: req.body.noofposts,
//       lastactivity: req.body.lastactivity
//     }).then(res.send('success'));
// })


app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
