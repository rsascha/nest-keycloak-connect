import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeycloakConnectModule, ResourceGuard, AuthGuard } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

// You can get this JSON from Keycloak -> client xyz -> Installation
const keycloakConfig = {
  "realm": "master",
  "auth-server-url": "http://localhost:8080/auth/",
  "ssl-required": "external",
  "resource": "test-service",
  "credentials": {
    "secret": "36ac3b2c-546e-4e5e-9064-f1e3cdbc3991"
  },
  "confidential-port": 0
}

@Module({
  imports: [
    KeycloakConnectModule.register(
      {
        authServerUrl:
          keycloakConfig["auth-server-url"],
        realm:
          keycloakConfig["realm"],
        clientId:
          keycloakConfig["resource"],
        secret:
          keycloakConfig["credentials"]["secret"],
      },
    )
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
  ],
})
export class AppModule { }
