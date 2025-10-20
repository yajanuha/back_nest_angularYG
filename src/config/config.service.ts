import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envconfig: { [key: string]: string };

  constructor() {
    const env = process.env.NODE_ENV || 'development';
    const envFilePath = `${__dirname}/../../.env.${env}`
    const existsPath = fs.existsSync(envFilePath)

    if (!existsPath) {
      console.log(`.env.${process.env.NODE_ENV} no existe`);
      process.exit(0)
    }

    this.envconfig = parse(fs.readFileSync(envFilePath));
  }

  get(key: string): string{
    return this.envconfig[key];
  }
}
