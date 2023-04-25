import {createTransport} from 'nodemailer';
import * as SMTPTransport from "nodemailer/lib/smtp-transport";

export interface IMailOptions {
  from: string;
  to: string;
  subject?: string;
  text: string;
}

export interface ISendmailerOptions {
  host: string;
  port: number;
  secure?: boolean;
  auth: {
    user: string;
    pass: string;
  }
}

export const sendMail = (config: ISendmailerOptions, mailOptions: IMailOptions): Promise<SMTPTransport.SentMessageInfo> => {
  return new Promise((resolve, reject) => {
    try {
      const transporter = createTransport(config);


      if (!mailOptions.to || !mailOptions.from) {
        reject('missing required mailOptions');
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        }

        resolve(info);
      });
    } catch (error: unknown) {
      reject(error)
    }
  });
}
