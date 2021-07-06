"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChamado = void 0;
var CreateChamadoService_1 = __importDefault(require("./CreateChamadoService"));
function createChamado(request, response) {
    CreateChamadoService_1.default.execute({
        nome: "Chamado 1",
        descricao: "Descrição 1",
        patrimonio: 10
    });
    return response.json({ message: "Criado com sucesso." });
}
exports.createChamado = createChamado;
