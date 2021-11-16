import mongoose from 'mongoose';
import chalk from 'chalk';

const dbURL = "mongodb+srv://am_pettit:Hurricane2372@native-leaper.6d7bd.mongodb.net/timely-backend?retryWrites=true&w=majority"

async function connectToMongoDB() {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(chalk.green('MongoDB is connected...'))
    } catch (error) {
        console.log(error)
    }
}

export default connectToMongoDB