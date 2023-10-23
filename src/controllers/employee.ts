import { Request, Response } from 'express'
import * as EmployeeService from '../services/employee';

export const getAll = async(req: Request, res: Response) => {
    try{
        const allEmployees = await EmployeeService.getAll();
        res.status(200).json({ status: 200, data:allEmployees })
    }catch(error){
        res.status(400).json({ status: 400, error:error })
        throw error;
    }
}

export const create = async(req: Request, res: Response) => {
    try{
        //add request validator
        const newEmployeeData = req.body;
        const createdEmployee = await EmployeeService.create(newEmployeeData);
        res.status(200).json({ status: 200, data:createdEmployee })
    }catch(error){
        res.status(400).json({ status: 400, error:error })
        throw error;
    }
}

// export const getById = async(req: Request, res: Response) => {
//     try{
//         //add request validator
//         const employeeId = req.params.id;
//         const employee = await EmployeeService.getById(employeeId);
//         res.status(200).json({ status: 200, data:employee })
//     }catch(error){
//         res.status(400).json({ status: 400, error:error })
//         throw error;
//     }
// }

// export const update = async(req: Request, res: Response) => {
//     try{
//         //add request validator
//         const updateEmployeeData = { id:req.params.id, ...req.body};
//         const updatedEmployee = await EmployeeService.update(updateEmployeeData);
//         res.status(200).json({ status: 200, data:updatedEmployee })
//     }catch(error){
//         res.status(400).json({ status: 400, error:error })
//         throw error;
//     }
// }

// export const destroy = async(req: Request, res: Response) => {
//     try{
//         //add request validator
//         const employeeId = req.params.id;
//         const deletedEmployee = await EmployeeService.getById(employeeId);
//         res.status(200).json({ status: 200, data:deletedEmployee })
//     }catch(error){
//         res.status(400).json({ status: 400, error:error })
//         throw error;
//     }
// }