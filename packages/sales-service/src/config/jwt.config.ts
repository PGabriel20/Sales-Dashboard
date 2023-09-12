import {  JwtModuleAsyncOptions, JwtModuleOptions } from "@nestjs/jwt";
import appConfig from "src/config/app.config";

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => ({
    secret: appConfig().jwtSecret,
    signOptions: { expiresIn: '1d' },
  })
}