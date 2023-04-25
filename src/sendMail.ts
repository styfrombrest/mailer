import {createTransport} from 'nodemailer';
import * as SMTPTransport from "nodemailer/lib/smtp-transport";
import {IMailOptions, ISendMailerOptions} from "./types";


export const sendMail = (config: ISendMailerOptions, mailOptions: IMailOptions): Promise<SMTPTransport.SentMessageInfo> => {
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
