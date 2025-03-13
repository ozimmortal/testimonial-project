import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { sendEmail } from "./action";

export const auth = betterAuth({
    database: drizzleAdapter(db,{
        provider:"pg"
    }),
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url }, request) => {
                // send email to user
                try{
                  const em =   await sendEmail({email,url});
                    if(!em.success)
                        return em.message
                    return em.email
                }catch(e:any){
                    return e.message
                }
            }
        })
    ]
})