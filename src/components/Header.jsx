import React from 'react'
import logo from './../assets/images/logo.png'
import HeaderItem from './HeaderItem';
// import { FaBeer } from "react-icons/fa";
import { HiHome,HiMagnifyingGlass, HiStar, HiPlayCircle,HiTv} from "react-icons/hi2"
import {HiPlus, HiDotsVertical} from 'react-icons/hi';
function Header() {
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center gap-8 justify-between p-5'>
        <div className='flex gap-8 item-center'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
        </div>
        <div className='flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
        </div>
        </div>
        <img src="https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="" className='w-[40px] rounder-full'/>
    </div>
  )
}

export default Header
