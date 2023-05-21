import Image from "next/image";
import { FC } from "react";
import ImgProfile from '../../client/assets/pexels-vazhnik-7562313.jpg';

export const Profile:FC = ({  }) => {
 return (
  <span>
   <strong style={{color: '#808080'}}>seu nome</strong>
   <Image style={{borderRadius: '9999px'}} alt="profile_icon" width={30} height={30} src={ImgProfile} />
  </span>
 )
}