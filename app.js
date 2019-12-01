const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true, useNewUrlParser: true },  )


const fruitSchema = new mongoose.Schema ({
  name : {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 8,
  review: "Its good"
})

 

pineapple.save()



const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})

const People = mongoose.model("People", peopleSchema)

const people = new People ({
  name: "John",
  age: 37,
})

// people.save();



// Fruit.find(function(err, fruits) {

//   if(err) {
//     console.log(err)
//   } else {

//     mongoose.connection.close()
  
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name)
//     })
//   }
// })


People.updateOne({_id: "5de409e83d4b26246873faf0"}, {favoriteFruit: pineapple}, function(err) {
  if(err){
    console.log(err)
  }else{
    console.log("Successful")
  }
})
