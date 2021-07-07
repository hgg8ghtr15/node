"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPessoa = void 0;
var CreatePessoaService_1 = __importDefault(require("./CreatePessoaService"));
function createPessoa(request, response) {
    CreatePessoaService_1.default.execute({ nome: "Fabio", idade: 10, sexo: "Masculino" });
    return response.send("Pessoa Criada com sucesso!");
}
exports.createPessoa = createPessoa;
