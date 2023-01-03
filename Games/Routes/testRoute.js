const Game = require("../Models/Game");

module.exports = app => {
    const testController = require("../Controllers/testcontroller");
    const router = require("express").Router();

    router.get("/", async function lol(){
        const a = await Game.findAll({order:[["id","DESC"]], limit:1})
        console.log(a);
    });
    
    app.use("/test", router);
}