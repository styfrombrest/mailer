import * as SMTPTransport from "nodemailer/lib/smtp-transport";
import { IMailOptions, ISendMailerOptions } from "./types";
export declare const sendMail: (config: ISendMailerOptions, mailOptions: IMailOptions) => Promise<SMTPTransport.SentMessageInfo>;
