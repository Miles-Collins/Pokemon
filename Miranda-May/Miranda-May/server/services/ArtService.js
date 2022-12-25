import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ArtService {
  async editArt(artId, newArt) {
    const oldArt = await this.getArtById(artId);

    if (oldArt.creatorId != newArt.creatorId)
      (oldArt.name = newArt.name || oldArt.name),
        (oldArt.picture = newArt.picture || oldArt.picture);
    oldArt.description = newArt.description || oldArt.description;
  }
  deleteArt(id) {
    throw new Error("Method not implemented.");
  }
  async createArt(body) {
    const art = await dbContext.Art.create(body);
    return art;
  }
  async getArtById(artId) {
    const art = await dbContext.Art.findById(artId).populate("creator");
    if (!art) {
      return new BadRequest("That piece of Art does not exist.");
    } else return art;
  }
  async getArt() {
    const art = await dbContext.Art.find().populate("creator");
    return art;
  }
}

export const artService = new ArtService();
