"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDepartemaneto = void 0;
var createDepartamentoService_1 = __importDefault(require("./createDepartamentoService"));
var uuid_1 = require("uuid");
function createDepartemaneto(request, response) {
    var id1 = uuid_1.v4();
    console.log(id1);
    createDepartamentoService_1.default.execute({
        id: id1,
        nome: "Departamento ti"
    });
    return response.send("Departamento criado com sucesso!");
}
exports.createDepartemaneto = createDepartemaneto;
