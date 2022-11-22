import { AppState } from "../AppState.js";
import { SinglePokemon } from "../models/SinglePokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokeDexService {
  async getPokemon() {
    let res = await pokeApi.get("/pokemon");
    console.log("Dex data", res.data.results);
    AppState.singlePokemon = res.data.results;
    AppState.singlePokemon.map((p) => new SinglePokemon(p));
    console.log("Single Pokemon", AppState.singlePokemon);
  }
}

export const pokeDexService = new PokeDexService();
