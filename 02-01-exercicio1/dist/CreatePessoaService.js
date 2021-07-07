"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreatePessoaService = /** @class */ (function () {
    function CreatePessoaService() {
    }
    CreatePessoaService.prototype.execute = function (_a) {
        var nome = _a.nome, idade = _a.idade, sexo = _a.sexo;
        console.log(nome, idade, sexo);
    };
    return CreatePessoaService;
}());
exports.default = new CreatePessoaService();
