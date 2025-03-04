require("dotenv").config();
const { default: mongoose } = require("mongoose")


const connectDb =async()=>{
try {
  mongoose.connect(process.env.MONGO_DB_URI)
  console.log('mongoDb connected succesfully')
} catch (error) {
  console.log(error,'error in mongoDb connection')
}
}

module.exports = {connectDb};
