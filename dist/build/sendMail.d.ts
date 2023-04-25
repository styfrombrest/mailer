import * as SMTPTransport from "nodemailer/lib/smtp-transport";
interface IMailOptions {
    from: string;
    to: string;
    subject?: string;
    text: string;
}
interface ISendmailerOptions {
    host: string;
    port: number;
    secure?: boolean;
    auth: {
        user: string;
        pass: string;
    };
}
export declare const sendMail: (config: ISendmailerOptions, mailOptions: IMailOptions) => Promise<SMTPTransport.SentMessageInfo>;
export {};
