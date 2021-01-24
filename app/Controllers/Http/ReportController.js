"use strict";
const Redis = use("Redis");
const Bull = use("Rocketseat/Bull");
const GenerateReport = use("App/Jobs/GenerateReport");
class ReportController {
  async index({ request, response }) {
    const cache = await Redis.get("report");
    if (cache) return response.send(JSON.parse(cache));
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
    return response.send(results);
  }
  async update_report({ request, response }) {
    Bull.add(GenerateReport.key);
    return response.send(true);
  }
}

module.exports = ReportController;
