"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDepartamentoService = /** @class */ (function () {
    function createDepartamentoService() {
    }
    createDepartamentoService.prototype.execute = function (_a) {
        var id = _a.id, nome = _a.nome;
        console.log(id, nome);
    };
    return createDepartamentoService;
}());
exports.default = new createDepartamentoService();
