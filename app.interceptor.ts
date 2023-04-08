// import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
// import { map, Observable } from "rxjs";

// import { Request } from "express";

// @Injectable()
// export class AppInterceptor implements NestInterceptor{
//     intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
//         // console.log("This is Interceptor");
//         const ctx =  context.switchToHttp();
//         const request = ctx.getRequest<Request>();
        
//         request.body.name = "This is the name";
//         request.body.age = 22;
//         return next.handle().
//         // pipe(map(data)=>{
//         //     data = "from interceptor"
//         //     return data;
//         // });
//         // throw new Error("Method not implemented.");
//     // }
// }
// }

// function data(value: any, index: number): unknown {
//     throw new Error("Function not implemented.");
// }
