import { Schema, model, models } from "mongoose";
import bcrypt from 'bcrypt'
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        validate: {
            validator: pass => pass.length >= 5,
            message: "Password must be at least five characters long"
        }
    }
}, { timestamps: true });

UserSchema.post('validate',function(user){
    const notHashedPassword=user.password;
    const salt =bcrypt.genSaltSync(10);
    user.password=bcrypt.hashSync(notHashedPassword,salt)
})

export const User = models?.User || model('User', UserSchema);
