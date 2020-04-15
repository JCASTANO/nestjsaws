"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
class ComandoRegistrarUsuario {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, clave: { required: true, type: () => String }, fechaCreacion: { required: true, type: () => Date } };
    }
}
exports.ComandoRegistrarUsuario = ComandoRegistrarUsuario;
//# sourceMappingURL=registrar-usuario.comando.js.map