import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../lib/prisma';

const handle = async (
  req: NextApiRequest, 
  res: NextApiResponse) => {

 const { 
  data, 
  email, 
  exitPoint, 
  id, 
  initialPoint, 
  lauch, 
  nome,
  hoursLeft,
  missingHours,
  notPoint,
  totalHours
 } = req.body;

 console.log(req.body.name)
 const result = await prisma.point.create({
  data: {
   email,
   exitPoint,
   initialPoint,
   lauch,
   data,
   id,
   name: nome, //request nome not name, change this in outher day
   hoursLeft, 
   totalHours,
   missingHours,
   notPoint
  }
 }).catch((err) => {
  return res.status(401)
 })
 return res.status(201).json(result)

}

export default handle;