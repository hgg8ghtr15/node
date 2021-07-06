"use strict";
/*

*/
Object.defineProperty(exports, "__esModule", { value: true });
var CreateChamadoService = /** @class */ (function () {
    function CreateChamadoService() {
    }
    CreateChamadoService.prototype.execute = function (_a) {
        var nome = _a.nome, descricao = _a.descricao, patrimonio = _a.patrimonio;
        console.log(nome, descricao, patrimonio);
    };
    return CreateChamadoService;
}());
exports.default = new CreateChamadoService();
