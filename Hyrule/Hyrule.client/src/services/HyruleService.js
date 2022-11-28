class HyruleService {
  async getHyrule() {
    let res = await hyrule.get();
    console.log(res.data);
  }
}

export const hyruleService = new HyruleService();
