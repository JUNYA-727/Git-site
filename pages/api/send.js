/** @format */
export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.API_KEY);
    const msg = {
      to: req.body.email,
      from: "k.junya0727@gamil.com",
      subject: "お問合せありがとうございました。",
      html:
        req.body.name +
        " 様、お問い合わせを受け付けました。回答まで遅くとも１～２日後にはご連絡しますので、しばらくお待ちください。",
    };
    const formine = {
      to: "k.junya0727@gmail.com",
      from: req.body.email,
      subject: "サイトからお問い合わせがありました。",
      html: "お問い合わせ内容:\n" + req.body.message,
    };
    (async () => {
      try {
        await sgMail.send(msg);
        await sgMail.send(formine);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
}
