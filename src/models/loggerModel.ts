// Libs
import { Logger, createLogger, format, transports } from "winston";

// Data
const { colorize, combine, printf, timestamp } = format;

// Class
class LoggerModel {
  public static get(): Logger {
    return createLogger({
      transports: [new transports.Console()],
      format: combine(
        colorize(),
        timestamp(),
        printf((info) => `[${info.timestamp}] (${info.level}) ${info.message}`)
      ),
    });
  }
}

// Code
export default LoggerModel;
