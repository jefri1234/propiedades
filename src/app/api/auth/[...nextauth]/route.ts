import NextAuth from "next-auth";
//traigo el paqute
import GoogleProvider from "next-auth/providers/google";


 const handler =NextAuth({
    //para decir con que servicio de internet
    // yo quiero autenticar
    providers:[
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })],
});

export {handler as GET ,handler as POST};