import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import style from './scss/style.module.css'
import { useState } from "react"
import { Add } from "./add"
import { z } from 'zod'
import * as Yup from 'yup';
import { Loader } from "./loader"


/* type valuesTypes = {
  nome: string;
  email: string;  
  id: number
  data: number
  initialPoint: string
  lauch: number
  totalHours: number
  exitPoint: string;
  notPoint: boolean
  missingHours: boolean;
  hoursLeft: number;
}
 */
const YupSchema = Yup.object().shape({
 nome: Yup.string()
 .min(2, "nome muito curto")
 .max(50, "nome muito longo")
 .required("Coloque seu nome!"),
 email: Yup.string().email("email invalido").required("Coloque seu email")
})

export const SendPoint = () => {
 const [disable, setDisable] = useState(false);
 const [err, setErr] = useState(false);
 const [loading, setLoading] = useState(false);
 const [requestSucess, setRequestSucess] = useState(false);

 const send = (values: any) => {
  const { 
    nome, 
    email, 
    exitPoint, //saida
    initialPoint, //entrada
    lauch, 
    totalHours,  
    hoursLeft, 
  } = values;

  const FatoryHours = (hours: string) => {
   const refatory = hours?.split("").filter((e) => e === ":" ? '' : e);
   const hour = refatory?.slice(0, 2)
   const refatoryHours = parseInt(hour[0] + hour[1])
   const minutes = refatory?.slice(2, 4)
   const refatoryMinutes = parseInt(minutes[0] + minutes[1]) 
   return [refatoryHours, refatoryMinutes]
  }
  const [hoursExitPoint, minutesExitPoint] = FatoryHours(exitPoint);
  const [hoursInitialPoint, minutesInitialPoint] = FatoryHours(initialPoint);
  
  const horasSobrando = hoursExitPoint - hoursInitialPoint
  const missingHoursC = horasSobrando - totalHours == totalHours ? true : false;
  
  setLoading(true);
  axios.post('/api/create', {
   nome: nome,   
   email,
   initialPoint: hoursInitialPoint,
   exitPoint: hoursExitPoint,
   lauch,
   totalHours: totalHours,
   notPoint: false, 
   missingHours: missingHoursC,
   hoursLeft: horasSobrando
  }).then((data) => {
   setErr(false)
   setLoading(false)
   setRequestSucess(true);
  }).catch((err) => {
   setLoading(false)
   setErr(true)
   setRequestSucess(false)
  })
 }

 const LoadingButton = () => {
  if(loading) {
    return <Loader />
 }
 if(err) {
  return <>erro</>
 }
 if(requestSucess) {
  return <>sucess</>
 }
 return <>mandar</>
}
const DisableValues = () => {
  setDisable(s => !s);
  setRequestSucess(false);
  return;
}

 return (
  <>
   <button style={{background: disable ? '#523db1': '#f44'}} className={style.button} onClick={() => DisableValues()}>
    <Add animation={disable} />
   </button>
    {disable ? (
     <aside className={style.content}>
      <h1>Create Point</h1>
      {/*   nome: string;
  email: string;  
  id: number
  data: number
  initialPoint: string
  lauch: number
  totalHours: number
  exitPoint: string;
  notPoint: boolean
  missingHours: boolean;
  hoursLeft: number; */}
        <Formik initialValues={{}} validationSchema={YupSchema} onSubmit={(values) => send(values)}>
        {({ isSubmitting, isValid, touched }) => (
         <Form>
            <label htmlFor="nome">Nome</label>
           <Field id="nome" className={style.input} placeholder="nome" type="text" name="nome" />
            <ErrorMessage className={style.errMessage} name="nome" component={'div'} />
            <label htmlFor="email">Email</label>
           <Field id="email" className={style.input} placeholder="email" type="email" name="email" />
            <ErrorMessage className={style.errMessage} name="email" component={'div'} />
            <label htmlFor="initialPoint">Entrada</label>
           <Field id="initialPoint" className={style.input} placeholder="entrada" type="time" name="initialPoint" />
            <ErrorMessage name="initialPoint" component={'div'} />
            <label htmlFor="exitPoint">Saida</label>
           <Field id="exitPoint" className={style.input} placeholder="saida" type="time" name="exitPoint" />
            <ErrorMessage name="exitPoint" component={'div'} />
            <label htmlFor="lauch">Horario de Almoço</label>
           <Field id="lauch" className={style.input} placeholder="tempo de descanso" type="number" name="lauch" />
            <ErrorMessage name="lauch" component={'div'} />
            <label htmlFor="totalHours">Horas totais</label>
           <Field id="totalHours" className={style.input} placeholder="horas totais" type="number" name="totalHours" />
            <ErrorMessage name="totalHours" component={'div'} />
           <button className={style.submit} disabled={!isValid} type="submit">
            {LoadingButton()}
           </button>
           

         </Form>
        )}
       </Formik>
     </aside>
    ): null}
  </>
 )
}