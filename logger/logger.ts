import chalk from 'chalk';

export class Logger {
  static step(msg: string) {
    console.log(chalk.bold.italic('    > Step: ') + chalk.cyan(msg));
  }
}
