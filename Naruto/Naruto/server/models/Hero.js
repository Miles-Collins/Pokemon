import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const HeroSchema = new Schema(
  {
    // creatorId: { type: ObjectId, required: true, ref: "Account" },
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

// HeroSchema.virtual("creator", {
//   localField: "creatorId",
//   foreignField: "_id",
//   ref: "Account",
//   justOne: true,
// });
