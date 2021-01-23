"use strict";

class ReportController {
  async index({ request, response }) {
    const results = await new Promise((resolve, reject) => {
      let result = [];
      function repeat(i = 0) {
        if (i === 1000) {
          resolve(result);
        }
        setTimeout(() => {
          result.push(i);
          repeat(i + 1);
        }, 1);
      }
      repeat();
    });
    return response.send(results);
  }
}

module.exports = ReportController;
