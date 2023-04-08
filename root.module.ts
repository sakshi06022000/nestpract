import { Module } from '@nestjs/common';
// import { OrdersModule } from './orders/orders.module';
// import { UsersModule } from './users/users.module';
// import { ChatModule } from './chat/chat.module';
// import { Feature1Module } from './feature1/feature1.module';
// import { Feature2Module } from './feature2/feature2.module';
// import { Feature3Module } from './feature3/feature3.module';
import { BookModule1 } from './book1/book1.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
// import { BookService } from './book.service';

@Module({
  // imports: [UsersModule, OrdersModule, ChatModule],
  // imports: [BookModule1],
  imports : [UserModule,AuthModule],
//   imports: [ConfigModule.forRoot({
//     isGlobal :true,
//     // envFilePath :".env",
//     // envFilePath :".local.env",
//     envFilePath :".prod.env",
//   }),
//   UsersModule 
// ],
  controllers: [AppController],
  providers: [],
  exports: [],
})

export class RootModule {
  // constructor() {
  //   console.log("App Module");
  // }
}
