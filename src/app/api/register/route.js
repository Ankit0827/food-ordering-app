import mongoose from 'mongoose';
import { User } from '../../models/User';
import {environment} from '../../../environments/environment.prod'


export async function POST(req, res) {
    const body = await req.json();
    mongoose.connect(environment.MONGO_URL);

    const createUser=await User.create(body);

    return Response.json(createUser)

}
