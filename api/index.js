import express from 'express'
import mongoose from 'mongoose'

const URI = "mongodb+srv://qzjin:Zhen1998@mern-blog.uolgfmk.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI)
    .then(() => {
        console.log("MongoDB is connected.")
    })
    .catch((err) => {
        console.log(err)
    })
const app = express()

mongoose.connect()
app.listen(3000, () => {
    console.log("server is running on port 3000")
})

