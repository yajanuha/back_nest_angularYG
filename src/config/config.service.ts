import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const env = process.env.NODE_ENV || 'development';
    const envFilePath = `${__dirname}/../../../.env.${env}`; 
    const existsPath = fs.existsSync(envFilePath)
    if (!existsPath) {
      console.error(`${envFilePath} no existe`);
      process.exit(1);
    }

    this.envConfig = parse(fs.readFileSync(envFilePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
<<<<<<< HEAD
}
=======
}
=======
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
>>>>>>> d52bdbae78b54397465463853f548d25784dc543
>>>>>>> 1301997d7b5caf835c56b19407bd19ca3924b4f9
