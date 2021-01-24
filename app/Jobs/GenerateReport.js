const Redis = use("Redis");
class GenerateReport {
  static get key() {
    return "GenerateReport-key";
  }

  async handle(job) {
    const results = await new Promise((resolve, reject) => {
      let result = [];
      function repeat(i = 0) {
        if (i === 1000) {
          resolve(result);
        }
        setTimeout(() => {
          result.push(i);
          repeat(i + 10);
        }, 1);
      }
      repeat();
    });
    await Redis.set("report", JSON.stringify(results));
    return true;
  }
}

module.exports = GenerateReport;
