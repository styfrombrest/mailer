# @styfrombrest/mailer

Internal mailer for my pet projects.

It uses `nodemailer` under the hood to send an email from nodejs script.

*Usage:*

```const result = await sendMail(config: ISendMailerOptions, mailOptions: IMailOptions);```

```js
interface IMailOptions {
  from: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
}
```

```js
interface ISendMailerOptions {
  host: string;
  port: number;
  secure?: boolean;
  auth: {
    user: string;
    pass: string;
  }
}
```

**Troubleshooting**:
- for yandex `IMailOptions.from` must be the same as `ISendMailerOptions.auth.use` otherwise it won't accept email to send
