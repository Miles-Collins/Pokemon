import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors";

class HeroesService {
  async editHero(heroData, heroId) {
    let hero = await this.getHeroById(heroId);
    hero.name = heroData.name || hero.name;
    hero.village = heroData.village || hero.village;
    hero.image = heroData.image || hero.image;
    hero.info = heroData.info || hero.info;
    hero.bio = heroData.bio || hero.bio;
    hero.isJin = heroData.isJin || hero.isJin;
    hero.isKage = heroData.isKage || hero.isKage;

    await hero.save();
    return hero;
  }
  async getHero() {
    const heroes = await dbContext.Heroes.find();
    if (!heroes) {
      throw new BadRequest("Where is the heroes");
    }
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
