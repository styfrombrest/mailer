export interface IMailOptions {
    from: string;
    to: string;
    subject?: string;
    text?: string;
    html?: string;
}
export interface ISendMailerOptions {
    host: string;
    port: number;
    secure?: boolean;
    auth: {
        user: string;
        pass: string;
    };
}
