import { SpanWeek } from "./spanWeek"
import style from './scss/style.module.css'

export const DaysWeek = () => {

 return (
  <div className={style.week}>
   <SpanWeek textColor='Domingo' text="Domingo" />
   <SpanWeek textColor="Segunda" text="Segunda" />
   <SpanWeek textColor="Terça" text="Terça" />
   <SpanWeek textColor='Quarta' text="Quarta" />
   <SpanWeek textColor='Quinta' text="Quinta" />
   <SpanWeek textColor='Sexta' text="Sexta" />
   <SpanWeek textColor='Sábado' text="Sábado" />
  </div>
 )
}