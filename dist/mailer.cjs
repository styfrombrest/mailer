'use strict';

var nodemailer = require('nodemailer');

var sendMail = function (config, mailOptions) {
    return new Promise(function (resolve, reject) {
        try {
            var transporter = nodemailer.createTransport(config);
            if (!mailOptions.to || !mailOptions.from) {
                reject('missing required mailOptions');
            }
            transporter.sendMail(mailOptions, function (error, info) {
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

exports.sendMail = sendMail;
//# sourceMappingURL=mailer.cjs.map
