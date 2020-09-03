import { Controller, Get, Post, Req, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger: Logger;

  constructor(private readonly appService: AppService) {
    this.logger = new Logger("AppController")
  }

  @Get()
  getHello(): string {
    this.logger.log("The API root was called!");
    return this.appService.getHello();
  }

  @Post("/set-token")
  setToken(): boolean {
    this.logger.log("set-token was called!");
    return this.appService.setToken();
  }
}
