import { Router } from "express";
import * as EmployeeController from '../controllers/employee';
export const router = Router();

router.get("/api/employees/", EmployeeController.getAll);
// router.post("/api/employees/", EmployeeController.create);
// router.get("/api/employees/:id", EmployeeController.getById);
// router.put("/api/employees/:id", EmployeeController.update);
// router.delete("/api/employees/:id", EmployeeController.destroy);