import * as emailjs from 'emailjs-com'

export const sendMail = templateParams => emailjs
    .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
    )