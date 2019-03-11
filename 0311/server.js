const mongoose = require('mongoose');

const { Schema } = mongoose;
// const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/animals', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

// const m = {
//   Schema: 'this is schema',
//   types: 'this is types'
// };

// const { Schema: schema, types } = m;
// console.log(schema, types);

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required information'],
    trim: true,
  },
  age: Number,
  legs: {
    type: Number,
    required: [true, 'Legs are needed'],
    min: [0, 'More legs than that!']
  },
  isPet: {
    type: Boolean,
    default: true
  }
}, {
    timestamps: {
      createdAt: true,
      updatedAt: 'updated_at',
  }
});
// register => animals 
const Animal = mongoose.model('Animal', AnimalSchema);

const animal = new Animal({
  name: 'Bob',
  age: 3,
  legs: 6,
});

// animal.save(function (error, savedAnimal) {
//   if (error) {
//     // handle error;
//     throw error;
//   }

//   console.log(savedAnimal);
// });


animal.save()
  .then(savedAnimal => console.log(savedAnimal))
  .catch(error => {
    const errors = Object.keys(error.errors).map(key => error.errors[key].message);

    // for (let index = 0; index < keys.length; index++) {
    //   console.log(keys[index]);
    //   errors.push(error.errors[keys[index]].message);
    // }

    console.log(errors);
  });