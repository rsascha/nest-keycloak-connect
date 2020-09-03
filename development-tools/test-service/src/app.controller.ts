import { Controller, Get, Post, Req, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { Resource, Scopes, KeycloakService, Roles, KeycloakedRequest, PublicPath } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  private logger: Logger;

  constructor(private readonly appService: AppService) {
    this.logger = new Logger("AppController")
  }

  @PublicPath()
  @Get()
  getHello(): string {
    this.logger.log("The API root was called!");
    return this.appService.getHello();
  }

  @Post("/set-token")
  setToken(@Req() request: Request): boolean {
    this.logger.log("set-token was called!");
    this.logger.log(`Cookies: ${JSON.stringify(request.cookies)}`);
    this.logger.log(`Headers: ${JSON.stringify(request.headers)}`);
    return this.appService.setToken();
  }
}
