import { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import calenderStyle from './scss/calender.module.css'
import { showData } from '@/shared/utils/showData';
import { CalenderContex } from '@/shared/reducer/reducer';
export default function Calender({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useContext(CalenderContex);
  
  
  const [mouthLength, setMouthLenght] = useState<Array<number | undefined >>([]);
  const [restDays, setRestDays] = useState<Array<number | undefined>>()
  const nowData = new Date().getDate()
  console.log(state.data)
  useEffect(() => {
    const loop = () => {
     const mes = showData({ mes: state.data }).mes
     const arr:Array<number> = []
     for(var i = 1; i <= mes; i++) {
       arr.push(i)
     }

     return {
      arr: arr,
     };
    }
    setMouthLenght(loop().arr);
    const loopRestDay = () => {
      const mes = showData({mes: state.data}).mes;
      const resDays = mes - 33;
      const refineDays = Math.abs(resDays);
      const arrRestDays = []
      for(var i = 1; i <= refineDays; i++) {
        arrRestDays.push(i)
      }
      console.log('res',arrRestDays, 'falta', resDays)
      return arrRestDays;
    }
    setRestDays(loopRestDay())

  }, [state])



 return (
   <article className={calenderStyle.container}>
     {children}
     <div className={calenderStyle.calender}>
     <span className={calenderStyle.calenderDaysNull}>
      <p>29</p>
     </span>
     <span className={calenderStyle.calenderDaysNull}>
      <p>30</p>
     </span>

    {mouthLength.map((data) => {
      return (
        <span key={data}  className={calenderStyle.calenderDays} >
          <p 
            data-week={data == nowData ? true : false}
            >
            {data == nowData ? (
             <span>{data}</span>
            ): 
            <>
             {data}
            </>
            }
          </p>
        </span>
     )
    })}
    {restDays?.map((data) => {
      return (
        <span className={calenderStyle.calenderDaysNull} key={data}>{data}</span>
      )
    })}
{/*      <span className={calenderStyle.calenderDaysNull}>
      <p>1</p>
     </span>
     <span className={calenderStyle.calenderDaysNull}>
      <p>2</p>
     </span> */}

    </div>
   </article>
  );
}
