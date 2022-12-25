import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";

class ArtService {
  async editArt(artId, newArt) {
    let oldArt = await this.getArtById(artId);

    if (oldArt.creatorId != newArt.creatorId) {
      throw new Forbidden(
        "You do not have permission to edit this piece of Art."
      );
    }

    oldArt.name = newArt.name || oldArt.name;
    oldArt.picture = newArt.picture || oldArt.picture;
    oldArt.price = newArt.price || oldArt.price;
    oldArt.description = newArt.description || oldArt.description;
    await oldArt.save();
    return oldArt;
  }
  deleteArt(artId, userId) {
    throw new Error("Method not implemented.");
  }
  async createArt(body) {
    let art = await dbContext.Art.create(body);
    await art.populate("creator");
    return art;
  }
  async getArtById(artId) {
    let art = await dbContext.Art.findById(artId).populate("creator");
    if (!art) {
      throw new BadRequest("That piece of Art does not exist.");
    }
    return art;
  }
  async getArt() {
    let art = await dbContext.Art.find().populate("creator");
    return art;
  }
}

export const artService = new ArtService();
