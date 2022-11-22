import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { HeroSchema } from "../models/Hero";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Heroes = mongoose.model("Hero", HeroSchema);
}

export const dbContext = new DbContext();
