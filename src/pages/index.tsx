import style from './scss/style.module.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import useSWR from 'swr'

import { DaysWeek } from '@/components/DaysWeek'
import Calender from '@/components/Calender'
import { CalenderProvider } from '@/shared/reducer/reducer'
import { Header } from '@/components/Header'
import { WeekSideBar } from '@/components/WeekSideBar'
import { SendPoint } from '@/components/SendPoint'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

const iPoint = {
  hour: 7,
  min: 55
}
const iExit = {
  hour: 16,
  min: 59
}
const diference = iPoint.hour - iExit.hour
const minutesDiference = iPoint.min - iExit.min

console.log(`${diference}:${minutesDiference}`)
/*  const dataNow = new Date();
 const initalHR = (7 - dataNow.getHours()) + 1
 const test = initalHR == -9 || initalHR == 9 ? 'sim' : 'não';
 console.log(test) */
 return (
    <CalenderProvider>
      <Header />
      <main>
        <div style={{display: 'flex'}}>
          <div className={style.root_container}>
            <Calender>
            <DaysWeek />
            </Calender>          
          </div>
        </div>
        <SendPoint />
      </main>
    </CalenderProvider>
  )
}
