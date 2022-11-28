class HyruleService {
  async getHyrule() {
    let res = await api.get();
    console.log(res.data);
  }
}

export const hyruleService = new HyruleService();
