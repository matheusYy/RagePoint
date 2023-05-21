import { WeekSideBar } from '../WeekSideBar';
import { MenuIcon } from './menu';
import { Profile } from './profile';
import style from './scss/style.module.css';
import { SearchBar } from './searchBar';
export const Header = () => {
 return (
  <header className={style.header}>
   <nav className={style.navBar}>
    <MenuIcon />
    <section>
     <SearchBar />
     <Profile />
    </section>
   </nav>
   <article className={style.dashBord}>
    <h1 className="">DashBord</h1>
    <WeekSideBar />
   </article>
  </header>
 )
 }