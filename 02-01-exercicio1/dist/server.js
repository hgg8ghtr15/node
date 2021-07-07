"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = require("./router");
var app = express_1.default();
app.get("/", router_1.createPessoa);
app.listen(4444, function () {
    console.log("Server online");
});
