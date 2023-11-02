import express from "express";
import DeviceController from "../controller/deviceController.js";

const deviceRoutes = express.Router();

deviceRoutes
    .get("/wind", DeviceController.wind);

export default deviceRoutes;