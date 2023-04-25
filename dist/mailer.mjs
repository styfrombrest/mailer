import { createTransport } from 'nodemailer';

var sendMail = function (config, mailOptions) {
    return new Promise(function (resolve, reject) {
        try {
            var transporter = createTransport(config);
            if (!mailOptions.to || !mailOptions.from) {
                reject('missing required mailOptions');
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error(error);
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

var sendMailHTML = function (args) {
    console.log('sendMailHTML:', args);
};

export { sendMail, sendMailHTML };
//# sourceMappingURL=mailer.mjs.map
