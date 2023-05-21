import { useEffect, useState, useContext } from "react"
import { Mouth } from "./data"
import { Seta } from "./seta"
import style from './scss/style.module.css'
import * as types from '../../shared/reducer/types'
import { CalenderContex } from "@/shared/reducer/reducer"

type MouthTypesState = {
 id: number,
 mes: number | string
}

export const WeekSideBar = () => {
 const [state, action] = useContext(CalenderContex)
 const [items, setItems] = useState<Array<MouthTypesState>>();
 const [touch, setTouch] = useState(0);
 console.log(action)
 useEffect(() => {
  setItems(() => Mouth.filter(f => f.id == touch))
 }, [touch]);

 useEffect(() => {
  if(touch == Mouth.length ) {
   setTouch((s) => s = 0)
  } else if(touch == -1) { 
    setTouch((s) => s + 12)
  }
 }, [items, touch])
 const yearNow = new Date().getFullYear()
 const click = ({ increment = false }) => {
  if(increment) {
    action.IncrementState()
    setTouch(s => s + 1)
  } else {
    action.DecrementState()
    setTouch(s => s - 1)
  }
 }

  return (
   <>
    <div 
     className={style.flex}>
     <Seta 
      eventClick={() => click({increment: false})} 
      className={style.setaStyle} />
      
      <span className={style.mouth}>
        {items?.map((data) => {
        const { id, mes } = data;
        return (
          <p key={id.toString()} onClick={() => setTouch(s => s + 1)}>{mes}</p>
        )
        })}
        
        {`${yearNow}`}
      </span>
     
     <Seta 
      eventClick={() => click({increment: true})} 
      className={style.setaStyle2} />
    </div>
   </>
  )
}