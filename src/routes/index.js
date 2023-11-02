import express from "express";
import deviceRoutes from "./deviceRoutes.js";

const routes = (app) => {
    app.route("/")
        .get((req, res) => {
            res.status(200).send("API Sistemas embarcados");
        });

    app.use(
        express.json(),
        deviceRoutes
    );
};

export default routes;
