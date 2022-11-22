import { isObjectIdOrHexString, Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const HeroeSchema = new Schema(
  {
    name: { type: String, required: true },
    village: { type: String, required: true },
    image: { type: String, required: true },
    info: { type: String },
    bio: { type: String, required: true },
    isJin: { type: Boolean, required: true },
    isKage: { type: Boolean, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);