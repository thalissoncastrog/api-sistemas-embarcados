import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String, required: true },
    minTemp: { type: mongoose.Schema.Types.Number, required: true },
    maxTemp: { type: mongoose.Schema.Types.Number, required: true },
    temp: { type: mongoose.Schema.Types.Number, required: true },
    isActive: { type: mongoose.Schema.Types.Boolean }
}, { versionKey: false });

const device = mongoose.model("devices", deviceSchema);

export default device;