import * as SMTPTransport from 'nodemailer/lib/smtp-transport';

interface IMailOptions {
    from: string;
    to: string;
    subject?: string;
    text: string;
    html?: string;
}
interface ISendMailerOptions {
    host: string;
    port: number;
    secure?: boolean;
    auth: {
        user: string;
        pass: string;
    };
}

declare const sendMail: (config: ISendMailerOptions, mailOptions: IMailOptions) => Promise<SMTPTransport.SentMessageInfo>;

export { IMailOptions, ISendMailerOptions, sendMail };
