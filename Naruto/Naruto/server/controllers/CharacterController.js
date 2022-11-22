import { heroesService } from "../services/HeroesService";
import BaseController from "../utils/BaseController";

export class HeroesController extends BaseController {
  constructor() {
    super("api/heroes");
  }

  async getHero(req, res, next) {
    try {
      const heroes = heroesService.getHero();
      return res.send();
    } catch (error) {
      next(error);
    }
  }
}
