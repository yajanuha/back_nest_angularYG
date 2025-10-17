import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    if (isDevelopmentEnv) {
      const envFilePath = path.resolve(__dirname, '../../.env.development');
      const existsPath = fs.existsSync(envFilePath);
      if (!existsPath) {
        console.log('.env.development no existe DEVELOPMENT');
        this.envConfig = {};
      } else {
        const envFileContent = fs.readFileSync(envFilePath, { encoding: 'utf8' });
        this.envConfig = parse(envFileContent);
      }
    } else {
      const envFilePath = path.resolve(__dirname, '../../.env.production');
      const existsPath = fs.existsSync(envFilePath);
      if (!existsPath) {
        console.log('.env.production no existe PRODUCTION');
        this.envConfig = {};
      } else {
        const envFileContent = fs.readFileSync(envFilePath, { encoding: 'utf8' });
        this.envConfig = parse(envFileContent);
      }
    }
  }

  get(key: string): string | undefined {
    return this.envConfig[key];
  }
}
