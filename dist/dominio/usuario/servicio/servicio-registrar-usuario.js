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
const repositorio_usuario_1 = require("../puerto/repositorio/repositorio-usuario");
const common_1 = require("@nestjs/common");
const error_de_negocio_1 = require("../../excepciones/error-de-negocio");
let ServicioRegistrarUsuario = class ServicioRegistrarUsuario {
    constructor(repositorioUsuario) {
        this._repositorioUsuario = repositorioUsuario;
    }
    async ejecutar(usuario) {
        if (await this._repositorioUsuario.existeNombreUsuario(usuario.nombre)) {
            throw new error_de_negocio_1.ErrorDeNegocio(`El nombre de usuario ${usuario.nombre} ya existe`);
        }
        await this._repositorioUsuario.guardar(usuario);
    }
};
ServicioRegistrarUsuario = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [repositorio_usuario_1.RepositorioUsuario])
], ServicioRegistrarUsuario);
exports.ServicioRegistrarUsuario = ServicioRegistrarUsuario;
//# sourceMappingURL=servicio-registrar-usuario.js.map