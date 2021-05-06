import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserModel extends Model<IUser> {}

const UserSchema = new Schema<IUser, UserModel>(
  {
    email: { type: String }
  },
  { timestamps: true }
);

const User = mongoose.model<Document & UserModel>('User', UserSchema);

export default User;
