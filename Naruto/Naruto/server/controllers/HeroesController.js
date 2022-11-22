import { heroesService } from "../services/HeroesService";
import BaseController from "../utils/BaseController";

export class HeroesController extends BaseController {
  constructor() {
    super("api/heroes");
    this.router
      .get("", this.getHeroes)
      .get("/:id", this.getHeroById)
      .post("", this.createHero);
  }

  async getHeroes(req, res, next) {
    try {
      const heroes = heroesService.getHero();
      return res.send(heroes);
    } catch (error) {
      next(error);
    }
  }

  async createHero(req, res, next) {
    try {
      const hero = await heroesService.createHero(req.body);
      return res.send(hero);
    } catch (error) {
      next(error);
    }
  }

  async getHeroById(req, res, next) {
    try {
      const hero = await heroesService.getHeroById(req.params.id);
      return res.send(hero);
    } catch (error) {
      next(error);
    }
  }
}
