import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ArtSchema } from "../models/Art";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Art = mongoose.model("Art", ArtSchema);
}

export const dbContext = new DbContext();
