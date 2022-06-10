import { config } from "dotenv";

config();

export default {
    mongodbURL: process.env.MONGODB_URI || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};