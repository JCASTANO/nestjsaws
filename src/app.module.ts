import { Module } from '@nestjs/common';
import { InfraestructuraModule } from './infraestructura/infraestructura.module';
import { AppController } from './app.controller';

@Module({
  imports: [InfraestructuraModule],
  controllers: [AppController]
})
export class AppModule {}
