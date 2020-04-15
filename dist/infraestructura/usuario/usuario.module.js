"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const servicio_registrar_usuario_1 = require("../../dominio/usuario/servicio/servicio-registrar-usuario");
const repositorio_usuario_1 = require("../../dominio/usuario/puerto/repositorio/repositorio-usuario");
const repositorio_usuario_mysql_1 = require("./adaptador/repositorio/repositorio-usuario-mysql");
const usuario_entidad_1 = require("./entidad/usuario.entidad");
const usuario_controlador_1 = require("./controlador/usuario.controlador");
const typeorm_1 = require("@nestjs/typeorm");
const registar_usuario_manejador_1 = require("../../aplicacion/usuario/comando/registar-usuario.manejador");
const dao_usuario_1 = require("../../dominio/usuario/puerto/dao/dao-usuario");
const dao_usuario_mysql_1 = require("./adaptador/dao/dao-usuario-mysql");
const listar_usuarios_manejador_1 = require("../../aplicacion/usuario/consulta/listar-usuarios.manejador");
const repositorioUsuarioProvider = {
    provide: repositorio_usuario_1.RepositorioUsuario,
    useClass: repositorio_usuario_mysql_1.RepositorioUsuarioMysql,
};
const daoUsuarioProvider = {
    provide: dao_usuario_1.DaoUsuario,
    useClass: dao_usuario_mysql_1.DaoUsuarioMysql,
};
let UsuarioModule = class UsuarioModule {
};
UsuarioModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entidad_1.UsuarioEntidad])],
        providers: [
            servicio_registrar_usuario_1.ServicioRegistrarUsuario,
            repositorioUsuarioProvider,
            daoUsuarioProvider,
            registar_usuario_manejador_1.ManejadorRegistrarUsuario,
            listar_usuarios_manejador_1.ManejadorListarUsuario,
        ],
        controllers: [usuario_controlador_1.UsuarioControlador],
    })
], UsuarioModule);
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map