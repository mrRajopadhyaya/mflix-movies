import mongoose, { Document, Model, Schema, ObjectId } from 'mongoose';

export interface IPoll extends Document {
  title: string;
  options: Array<IPollOptions>;
  createdAt: string;
  updatedAt: string;
}
export interface IPollOptions {
  title: string;
  users: Array<ObjectId>;
}
export interface PollModel extends Model<IPoll> {}

const PollSchema = new Schema<IPoll, PollModel>(
  {
    title: { type: String },
    options: [
      {
        title: { type: String },
        voters: [{ type: Schema.Types.ObjectId, ref: 'User' }]
      }
    ]
  },
  { timestamps: true }
);

const Poll = mongoose.model<Document & PollModel>('Poll', PollSchema);

export default Poll;
