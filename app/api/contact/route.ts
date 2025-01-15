import nodemailer from 'nodemailer'
export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kaliashvilisergi@gmail.com',
                pass: process.env.pass
            }
        })
        const mailForMe = {
            from: `${body.name}<${body.email}>`,
            to: 'kaliashvilisergi@gmail.com',
            subject: `Portfolio Response from ${body.name}  `,
            text: `${body.text}`
        };
        await transporter.sendMail(mailForMe)
        const mailForUser = {
            from: 'kaliashvilisergi@gmail.com',
            to: `${body.email}`,
            subject: `Thank you for your Response`,
            text: `Hi ${body.name}, I truly appreciate your response. I'll be in touch with you shortly! `
        };
        await transporter.sendMail(mailForUser)


        return Response.json({
            message: 'Email send successfully'
        })
    } catch (error) {
        return Response.json({
            error: 'failed to send email'
        })
    }

}