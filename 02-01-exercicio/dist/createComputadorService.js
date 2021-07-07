"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateComputadorService = /** @class */ (function () {
    function CreateComputadorService() {
    }
    CreateComputadorService.prototype.execute = function (_a) {
        var id = _a.id, nome = _a.nome, modelo = _a.modelo;
        console.log(id, nome, modelo);
    };
    return CreateComputadorService;
}());
exports.default = new CreateComputadorService();
