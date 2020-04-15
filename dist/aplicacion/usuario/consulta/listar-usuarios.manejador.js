"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const dao_usuario_1 = require("../../../dominio/usuario/puerto/dao/dao-usuario");
const usuario_dto_1 = require("../../../dominio/usuario/modelo/usuario.dto");
let ManejadorListarUsuario = class ManejadorListarUsuario {
    constructor(_daoUsuario) {
        this._daoUsuario = _daoUsuario;
    }
    async ejecutar() {
        return await this._daoUsuario.listar();
    }
};
ManejadorListarUsuario = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [dao_usuario_1.DaoUsuario])
], ManejadorListarUsuario);
exports.ManejadorListarUsuario = ManejadorListarUsuario;
//# sourceMappingURL=listar-usuarios.manejador.js.map