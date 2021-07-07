"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComputador = void 0;
var createComputadorService_1 = __importDefault(require("./createComputadorService"));
function createComputador(request, response) {
    createComputadorService_1.default.execute({
        id: 10,
        nome: "Dell",
        modelo: "XPG1020"
    });
    return response.send("Computador criado com sucesso!");
}
exports.createComputador = createComputador;
