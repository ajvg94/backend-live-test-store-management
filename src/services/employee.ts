import Employee from '../models/employee'

export const getAll = async() => {
    try{
        const allEmployees = await Employee.findAll();
        return allEmployees;
    }catch(error){
        throw error;
    }
}