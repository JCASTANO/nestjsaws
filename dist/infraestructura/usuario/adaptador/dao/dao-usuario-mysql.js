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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dao_usuario_1 = require("../../../../dominio/usuario/puerto/dao/dao-usuario");
const usuario_dto_1 = require("../../../../dominio/usuario/modelo/usuario.dto");
let DaoUsuarioMysql = class DaoUsuarioMysql {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async listar() {
        return await this.entityManager.query('SELECT u.nombre, u.clave FROM usuario u');
    }
};
DaoUsuarioMysql = __decorate([
    __param(0, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], DaoUsuarioMysql);
exports.DaoUsuarioMysql = DaoUsuarioMysql;
//# sourceMappingURL=dao-usuario-mysql.js.map