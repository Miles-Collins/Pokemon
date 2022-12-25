import { AppState } from "../AppState";
import { hyrule } from "./AxiosService";

class HyruleService {
  async getHyrule() {
    const res = await hyrule.get("/all");
    console.log("[GETTING ALL HYRULE DATA]", res.data);
  }
  async getCategory(category) {
    const res = await hyrule.get(`/category/${category}`);
    console.log(`[GETTING ${category} DATA]`, res.data);
    AppState[category] = res.data;
    console.log(`"[${category}]"`, AppState[category]);
  }

  async creatures(category, data) {
    console.log(category);
    if (category == "creatures") {
      AppState.creatures = data;
      console.log("[CREATURES]", AppState.creatures);
      return;
    }
    if (category == "equipment") {
      AppState.equipment = data;
      console.log("[EQUIPMENT]", AppState.equipment);
      return;
    }
    if (category == "materials") {
      AppState.materials = data;
      console.log("[MATERIALS]", AppState.materials);
      return;
    }
    if (category == "monsters") {
      AppState.monsters = data;
      console.log("[MONSTERS]", AppState.monsters);
      return;
    }
    if (category == "treasure") {
      AppState.treasure = data;
      console.log("[TREASURE]", AppState.treasure);
      return;
    }
  }
}

export const hyruleService = new HyruleService();
