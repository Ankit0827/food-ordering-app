
import mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'


// for authentication through next/auth
const handler = NextAuth({

  secret: "wueyiuwrifhjkcnbdjchuydvtuyvdhcasfty",
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      
      //for authorization when user try to login 

      // credential - it will take all the creadential which is define on above object named credentials 
      
      
      async authorize(credentials) {

        // destructuring {email , password } from the credential

        const { email, password } = credentials;

        // mongoose connection

        mongoose.connect("mongodb+srv://food-ordering-app:71Hu4LGIF3v5R5bd@cluster0.mfjjf9b.mongodb.net/food-ordering-app");

        const user = await User.findOne({email});


        // passwordOk = when user fill the credential then we will compare the password to the hashed password beacuse we stored the password in database in bcrypt form that's why we  will have to use "compareSync" function.

        const passworkOk = user && bcrypt.compareSync(password, user.password);

        console.log(passworkOk)

        if (passworkOk) {
          return user;
        }

        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }