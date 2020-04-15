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
const servicio_registrar_usuario_1 = require("../../../dominio/usuario/servicio/servicio-registrar-usuario");
const usuario_1 = require("../../../dominio/usuario/modelo/usuario");
let ManejadorRegistrarUsuario = class ManejadorRegistrarUsuario {
    constructor(_servicioRegistrarUsuario) {
        this._servicioRegistrarUsuario = _servicioRegistrarUsuario;
    }
    async ejecutar(comandoRegistrarUsuario) {
        await this._servicioRegistrarUsuario.ejecutar(new usuario_1.Usuario(comandoRegistrarUsuario.nombre, comandoRegistrarUsuario.clave, comandoRegistrarUsuario.fechaCreacion));
    }
};
ManejadorRegistrarUsuario = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [servicio_registrar_usuario_1.ServicioRegistrarUsuario])
], ManejadorRegistrarUsuario);
exports.ManejadorRegistrarUsuario = ManejadorRegistrarUsuario;
//# sourceMappingURL=manejador-registar-usuario.js.map