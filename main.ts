import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { AppModule } from './book/app.module';
import { RootModule } from './root.module';


// function globalMiddleware(req : Request ,res : Response  , next : NextFunction){
//   console.log(`This is the global middleware`);
  
// }
async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  // app.use(globalMiddleware);
  // console.log(process.env.port);
  await app.listen(3000);
}
bootstrap();


