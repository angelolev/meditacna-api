const MongoLib = require("../lib/mongo");

class SchedulesService {
  constructor() {
    this.collection = "schedules";
    this.mongoDB = new MongoLib();
  }

  async getSchedules() {
    const query = "";
    const schedules = await this.mongoDB.getAll(this.collection, query);
    return schedules || [];
  }

  async getSchedule({ scheduleId }) {
    const schedule = await this.mongoDB.get(this.collection, scheduleId);
    return schedule || {};
  }

  async createSchedule({ schedule }) {
    const createdMovieId = await this.mongoDB.create(this.collection, schedule);
    return createdMovieId;
  }

  async updateSchedule({ scheduleId, schedule } = {}) {
    const updatedMovieId = await this.mongoDB.update(
      this.collection,
      scheduleId,
      schedule
    );
    return updatedMovieId;
  }

  async deleteSchedule({ scheduleId, schedule }) {
    const deletedMovieId = await this.mongoDB.delete(
      this.collection,
      scheduleId,
      schedule
    );
    return deletedMovieId;
  }
}

module.exports = SchedulesService;
