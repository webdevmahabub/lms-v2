import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
// [
//     {
//         to: "support@greenviewsoft.com",
//         subject: "it a great",
//         message: "asdfsadfsad fasd"
//     },
// ]

export const sendEmails = async (emailInfo) => {
    if (!emailInfo) return null;

    const response = await Promise.allSettled(
        emailInfo.map(async (data) => {
            if (data.to && data.subject && data.message) {
                const to = data.to;
                const subject = data.subject;
                const message = data.message;

        const sendInfo = await resend.emails.send({
            from: "support@marketing.greenpaybd.com",
            to: to,
            subject: subject,
            react: EmailTemplate({message}), 
        });

        return sendInfo;


            } else {
                new Promise((reject) => {
                    return reject(
                        new Error(`Could not send email, Please check the ${JSON.stringify(data)}.`)
                    );
                });
            }
        }) 
    );

    return response
}