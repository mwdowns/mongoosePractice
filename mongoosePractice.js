const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/practice_db');

const Language = mongoose.model('Language', {
  language: {type: String, required: true},
  website: String,
  inventors: {type: [String], required: true},
  first_appeared: {type: Date, required: true},
  paradigm: [String],
  typing_discipline: [String],
  current_release_date: Date,
  influences: String
});

const Album = mongoose.model('Album', {
  name: String,
  artist: String,
  released: Date,
  tracks: [{
    name: String,
    songWriters: [String],
    duration: Number
  }],
  personnel: [{
    name: String,
    instrument: String
  }]
});

// Language.create({
//   name: 'Scala',
//   website: 'www.scala-lang.org',
//   inventors: ['Martin Odersky'],
//   first_appeared: new Date('2004'),
//   paradigm: ['object-oriented', 'functional', 'lazy'],
//   typing_discipline: ['static', 'strong', 'inferred', 'structural'],
//   current_release_date: new Date('12-5-2016'),
//   influences: ['Java', 'Lisp', 'Haskell']
// });

// Language.find()
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log('you had an error, ', err);
//   });
//
// Language.find({language: 'Python'})
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log('you got an error, ', err);
//   });
//
// Language.update(
//   {language: 'Python'},
//   {
//     $set: {
//       website: 'www.python.org'
//     }
//   }
// )
// .then(function(data) {
//   console.log('success, ', data);
// })
// .catch(function(err) {
//   console.log('there was an error, ', err);
// });

// Language.find({language: 'Scala'})
// .then(function(data) {
//   console.log('this is the id: ', data[0]._id);
// })
// .catch(function(err) {
//   console.log('you got an error, ', err);
// });

Language.create({
  language: 'C',
  website: 'www.c.org',
  inventors: ['Dennis Ritchie'],
  first_appeared: new Date('1972'),
  paradigm: ['imperative', 'structural'],
  typing_discipline: ['static', 'weak', 'manifest', 'nominal'],
  current_release_date: new Date('2011'),
  influences: ['B', 'Assembly', 'FORTRAN']
})
.then(function(data) {
  console.log('success', data);
})
.catch(function(err) {
  console.log('you got an error, ', err);
});
