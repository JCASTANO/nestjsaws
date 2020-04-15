"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MigracionUsuario1583873676081 {
    constructor() {
        this.name = 'MigracionUsuario1583873676081';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `usuario` (`id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `clave` varchar(255) NOT NULL, `fechaCreacion` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("DROP TABLE `usuario`", undefined);
    }
}
exports.MigracionUsuario1583873676081 = MigracionUsuario1583873676081;
//# sourceMappingURL=1583873676081-MigracionUsuario.js.map