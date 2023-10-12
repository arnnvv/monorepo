import mongoose, { ConnectOptions } from "mongoose";

let alreadyDone: boolean = false;

export async function ensureDbConnect() {
    if (!alreadyDone) {
        try {
            // Connect to MongoDB
            const connectionOptions: ConnectOptions = {
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                //In new version we don't need to specify these two!
                dbName: "courses"
            };

            await mongoose.connect('mongodb+srv://kirattechnologies:iRbi4XRDdM7JMMkl@cluster0.e95bnsi.mongodb.net/admin?authSource=admin&replicaSet=atlas-ue73sj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', connectionOptions);

            alreadyDone = true;
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            throw err;
        }
    }
}
