const express = require("express");
const contacts = require("../controller/contacts.controller");

module.exports = (app) => {
    const router = express.Router();

    router.get("/", contacts.findAll);

    router.post("/", contacts.create);

    router.delete("/", contacts.deleteAll);

    router.get("/favorite", contacts.findAllFavorite);

    router.get("/:id", contacts.findOne);

    router.put("/:id", contacts.update);

    router.delete("/:id", contacts.delete);

    app.use("/api/contacts", router);

}