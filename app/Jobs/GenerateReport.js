const Redis = use("Redis");
class GenerateReport {
  static get key() {
    return "GenerateReport-key";
  }

  async handle(job) {
    const { data } = job; // the 'data' variable has user data

    return data;
  }
}

module.exports = GenerateReport;
