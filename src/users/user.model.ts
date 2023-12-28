import { Document, Schema } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
