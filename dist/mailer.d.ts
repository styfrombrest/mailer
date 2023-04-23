declare const sendMail: (args: string[]) => void;

declare namespace sendMail_d {
  export {
    sendMail as default,
  };
}

declare const sendMailHTML: (args: string[]) => void;

declare namespace sendMailHTML_d {
  export {
    sendMailHTML as default,
  };
}

export { sendMail_d as sendMail, sendMailHTML_d as sendMailHTML };
