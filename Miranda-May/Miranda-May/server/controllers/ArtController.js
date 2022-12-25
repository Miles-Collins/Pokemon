import { Auth0Provider } from "@bcwdev/auth0provider";
import { artService } from "../services/ArtService";
import BaseController from "../utils/BaseController";

export class ArtController extends BaseController {
  constructor() {
    super("/api/art"),
      this.router
        .get("", this.getArt)
        .get("/:id", this.getArtById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post("", this.createArt)
        .put("/:id", this.editArt)
        .delete("/:id", this.deleteArt);
  }

  async getArt(req, res, next) {
    try {
      const art = await artService.getArt();
      return res.send(art);
    } catch (error) {
      next(error);
    }
  }

  async getArtById(req, res, next) {
    try {
      let art = await artService.getArtById(req.params.id);
      return res.send(art);
    } catch (error) {
      next(error);
    }
  }

  async createArt(req, res, next) {
    try {
      const art = await artService.createArt(req.body);
      return res.send(art);
    } catch (error) {
      next(error);
    }
  }

  async editArt(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const art = await artService.editArt(req.params.id, req.body);
      return res.send();
    } catch (error) {
      next(error);
    }
  }

  async deleteArt(req, res, next) {
    try {
      const userInfo = req.userInfo.id;
      const art = await artService.deleteArt(req.params.id, userInfo);
      return res.send(art);
    } catch (error) {
      next(error);
    }
  }
}
