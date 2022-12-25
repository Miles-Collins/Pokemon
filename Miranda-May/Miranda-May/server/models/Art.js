import { Schema } from "mongoose";

export const ArtSchema = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String, required: true, maxlength: 500 },
    description: { type: String, maxlength: 500 },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

ArtSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
