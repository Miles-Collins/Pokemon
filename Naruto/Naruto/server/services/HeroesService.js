import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors";

class HeroesService {
  async getHero() {
    const heroes = await dbContext.Heroes.find();
    return heroes;
  }
  async getHeroById(heroId) {
    const hero = await dbContext.Heroes.findById(heroId);
    if (!hero) {
      throw new BadRequest("There is no Hero with that ID.");
    }
    return hero;
  }
  async createHero(heroData) {
    const hero = await dbContext.Heroes.create(heroData);
    return hero;
  }
}

export const heroesService = new HeroesService();
