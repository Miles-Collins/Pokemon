import { api } from "./AxiosService";

class HeroesService {
  async getHeroes() {
    const heroes = await api.get("api/heroes");
    console.log("Heroes", heroes.data);
  }
}

export const heroesService = new HeroesService();
