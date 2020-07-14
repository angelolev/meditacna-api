const express = require("express");
const { appointmentsMock } = require("../utils/mocks/appointments");

function appointmentsApi(app) {
  const router = express.Router();
  app.use("/api/appointments", router);

  router.get("/", async function (req, res, next) {
    try {
      const appointments = await Promise.resolve(appointmentsMock);

      res.status(200).json({
        data: appointments,
        message: "appointments listed",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:appointmentId", async function (req, res, next) {
    try {
      const appointments = await Promise.resolve(appointmentsMock[0]);

      res.status(200).json({
        data: appointments,
        message: "appointment obtenida",
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function (req, res, next) {
    try {
      const createdAppointmentId = await Promise.resolve(
        appointmentsMock[0].id
      );

      res.status(201).json({
        data: createdAppointmentId,
        message: "appointment creada",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:appointmentId", async function (req, res, next) {
    try {
      const updatedAppointmentId = await Promise.resolve(
        appointmentsMock[0].id
      );

      res.status(200).json({
        data: updatedAppointmentId,
        message: "appointment actualizada",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:appointmentId", async function (req, res, next) {
    try {
      const deletedAppointmentId = await Promise.resolve(appointmentsMock[0]);

      res.status(200).json({
        data: deletedAppointmentId,
        message: "appointment eliminada",
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = appointmentsApi;
