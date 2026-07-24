import { createTransport } from 'nodemailer';

const sendMail = (config, mailOptions) => {
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
        }
        catch (error) {
            reject(error);
        }
    });
};

export { sendMail };
//# sourceMappingURL=mailer.mjs.map
