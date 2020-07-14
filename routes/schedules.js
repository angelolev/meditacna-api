const express = require("express");
const SchedulesServices = require("../services/schedules");

function schedulesApi(app) {
  const router = express.Router();
  app.use("/api/schedules", router);

  const schedulesServices = new SchedulesServices();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;

    try {
      const schedules = await schedulesServices.getSchedules({ tags });

      res.status(200).json({
        data: schedules,
        message: "schedules listed",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:scheduleId", async function (req, res, next) {
    const { scheduleId } = req.params;

    try {
      const schedule = await schedulesServices.getSchedule({ scheduleId });

      res.status(200).json({
        data: schedule,
        message: "schedule obtenida",
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function (req, res, next) {
    const { body: schedule } = req;
    try {
      const createdScheduleId = await schedulesServices.createSchedule({
        schedule,
      });

      res.status(201).json({
        data: createdScheduleId,
        message: "schedule creado",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:scheduleId", async function (req, res, next) {
    const { body: schedule } = req;
    const { scheduleId } = req.params;

    try {
      const updatedScheduleId = await schedulesServices.updateSchedule({
        scheduleId,
        schedule,
      });

      res.status(200).json({
        data: updatedScheduleId,
        message: "schedule actualizado",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:scheduleId", async function (req, res, next) {
    const { scheduleId } = req.params;
    try {
      const deletedScheduleId = await schedulesServices.deleteSchedule({
        scheduleId,
      });

      res.status(200).json({
        data: deletedScheduleId,
        message: "schedule eliminado",
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = schedulesApi;
