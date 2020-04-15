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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const registrar_usuario_comando_1 = require("../../../aplicacion/usuario/comando/registrar-usuario.comando");
const registar_usuario_manejador_1 = require("../../../aplicacion/usuario/comando/registar-usuario.manejador");
const listar_usuarios_manejador_1 = require("../../../aplicacion/usuario/consulta/listar-usuarios.manejador");
const usuario_dto_1 = require("../../../dominio/usuario/modelo/usuario.dto");
let UsuarioControlador = class UsuarioControlador {
    constructor(_manejadorRegistrarUsuario, _manejadorListarUsuario) {
        this._manejadorRegistrarUsuario = _manejadorRegistrarUsuario;
        this._manejadorListarUsuario = _manejadorListarUsuario;
    }
    async crear(comandoRegistrarUsuario) {
        await this._manejadorRegistrarUsuario.ejecutar(comandoRegistrarUsuario);
    }
    async listar() {
        return await this._manejadorListarUsuario.ejecutar();
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrar_usuario_comando_1.ComandoRegistrarUsuario]),
    __metadata("design:returntype", Promise)
], UsuarioControlador.prototype, "crear", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../../../dominio/usuario/modelo/usuario.dto").UsuarioDTO] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioControlador.prototype, "listar", null);
UsuarioControlador = __decorate([
    common_1.Controller('usuarios'),
    __metadata("design:paramtypes", [registar_usuario_manejador_1.ManejadorRegistrarUsuario,
        listar_usuarios_manejador_1.ManejadorListarUsuario])
], UsuarioControlador);
exports.UsuarioControlador = UsuarioControlador;
//# sourceMappingURL=usuario.controlador.js.map