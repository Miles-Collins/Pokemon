import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class ArtService {
  async getArt() {
    let res = await api.get("api/art");
    logger.log("[GETTING ALL ART]", res.data);
    AppState.artPieces = res.data;
  }
}

export const artService = new ArtService();
