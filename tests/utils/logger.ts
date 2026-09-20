import winston from 'winston';

// Define how each log message should look
const logFormat = winston.format.printf((info) => {
  return `[${info.timestamp}] ${info.level}: ${info.message}`;
});

// Create the logger
const logger = winston.createLogger({
  level: 'info',

  format: winston.format.combine(
    winston.format.timestamp(),
    logFormat
  ),

  transports: [
    // Print logs in terminal
    new winston.transports.Console(),

    // Save logs to file
    new winston.transports.File({
      filename: 'logs/test.log',
      options: { flags: 'w' } // overwrite file each run
    })
  ]
});

export default logger;