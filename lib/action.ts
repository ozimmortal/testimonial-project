"use server";
import { EmailTemplate,EmailTemplateProps } from '@/components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({  email,url }: EmailTemplateProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Magic Link',
      react:await EmailTemplate({ email,url }),
    });

    if (error) {
      return {
        success: false,
        message: "Email sent successfully",
        error:error.message
      };
    }

    return {
      success: true,
      message: "Email sent successfully",
      error:null
    };
  } catch (error:any) {
        return error.message 
  }
}