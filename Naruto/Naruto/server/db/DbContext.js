import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { HeroeSchema } from "../models/Hero";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Heroes = mongoose.model("Hero", HeroeSchema);
}

export const dbContext = new DbContext();
