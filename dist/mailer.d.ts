import * as SMTPTransport from 'nodemailer/lib/smtp-transport';

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
declare const sendMail: (config: ISendmailerOptions, mailOptions: IMailOptions) => Promise<SMTPTransport.SentMessageInfo>;

declare const sendMailHTML: (args: string[]) => void;

export { sendMail, sendMailHTML };
