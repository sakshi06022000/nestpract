import { Controller, Post, Get,Req, Res, UseInterceptors } from "@nestjs/common";
// import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
// import { AppInterceptor } from "./app.interceptor";

// import { Request, Response } from "express";
import { Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport/dist";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from './auth/jwt.auth.guard';

@Controller('app')
// export class AppController{
//     @Post('/add')
//     @UseInterceptors(AppInterceptor)
//     helloworld(@Req() req : Request, @Res() res : Response) :any {
//         // return "This will add bookss";
//         // return res.json(req.body);
//         return res.send("This is response")
//     }

//     @Get('/add')
//     @UseInterceptors(AppInterceptor)
//     hello() :string{
//         return "Hello World!";
//     }
// }

// export class AppController{
//     constructor(){}

//     @Get()
//     @UseGuards(AuthGuard('local'))
//     getHello(): string{
//         return "This is private data";
//     }
// }


export class AppController {
    constructor(private readonly authService : AuthService) {}

    // @Get('/login')
    // @UseGuards(AuthGuard('local'))
    // login(): string{
    //     return "This is login";
    // }

    @Post('/login')
    @UseGuards(AuthGuard("local"))
    login(@Request() req): object{
        return this.authService.generateToken(req.user)
    }

    @Get('/data')
    @UseGuards(JwtAuthGuard)
    data(@Request() req) : string{
        return req.user;
        // return "This is data";
    }
}

