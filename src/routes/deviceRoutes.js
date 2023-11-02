import express from "express";
import DeviceController from "../controller/deviceController.js";

const deviceRoutes = express.Router();

deviceRoutes
    .get("/dashboard/wind", DeviceController.listDevices)
    .put("/dashboard/wind/:id", DeviceController.updateDevices);

export default deviceRoutes;