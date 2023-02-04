import mongoose, { mongo } from "mongoose";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export class DataBaseConfig {
    constructor() { }
    static connectMongoDB() {
       const username = process.env.MONGO_DB_USERNAME
       const password = process.env.MONGO_DB_PASSWORD
       const cluster = process.env.MONGO_DB_CLUSTER
       const dbname = "NoteDB";
        mongoose.set("strictQuery", true);
        mongoose.connect( `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
        ).then(() => {
            console.log("connected to mongodb");
        }).catch((err) => {
            console.log(err);
        })

    }
}