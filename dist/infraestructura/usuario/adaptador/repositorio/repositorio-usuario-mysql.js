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
const repositorio_usuario_1 = require("../../../../dominio/usuario/puerto/repositorio/repositorio-usuario");
const usuario_1 = require("../../../../dominio/usuario/modelo/usuario");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entidad_1 = require("../../entidad/usuario.entidad");
const typeorm_2 = require("typeorm");
let RepositorioUsuarioMysql = class RepositorioUsuarioMysql {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    async existeNombreUsuario(nombre) {
        return (await this.repositorio.count({ nombre: nombre })) > 0;
    }
    async guardar(usuario) {
        const entidad = new usuario_entidad_1.UsuarioEntidad();
        entidad.clave = usuario.clave;
        entidad.fechaCreacion = usuario.fechaCreacion;
        entidad.nombre = usuario.nombre;
        await this.repositorio.save(entidad);
    }
};
RepositorioUsuarioMysql = __decorate([
    __param(0, typeorm_1.InjectRepository(usuario_entidad_1.UsuarioEntidad)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RepositorioUsuarioMysql);
exports.RepositorioUsuarioMysql = RepositorioUsuarioMysql;
//# sourceMappingURL=repositorio-usuario-mysql.js.map