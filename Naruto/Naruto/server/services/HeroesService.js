import { dbContext } from "../db/DbContext";

class HeroesService {
  async getHero() {
    const heroes = await dbContext.Heroes.find();
  }
}

export const heroesService = new HeroesService();
