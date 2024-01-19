import mongoose from 'mongoose';
import { User } from '../../models/User';


export async function POST(req, res) {
    const body = await req.json();
    mongoose.connect("mongodb+srv://food-ordering-app:71Hu4LGIF3v5R5bd@cluster0.mfjjf9b.mongodb.net/food-ordering-app");

    const createUser=await User.create(body);

    return Response.json(createUser)

}
