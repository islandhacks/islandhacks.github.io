import React from 'react'
import { Mail } from 'lucide-react'
import discordIcon from '/src/assets/discord-outline.svg';
import instagramIcon from '/src/assets/instagram-icon.png';

const Socials = () => {
const discord = import.meta.glob('/src/assets/discord-icon.png', { eager: true })['/src/assets/discord-icon.png'].default;
  return (

    
    <div className='flex flex-row items-center'>
        <div className=' w-16 h-16 rounded-xl'>
            <a href="mailto:team@island-hacks.org">
                <Mail className='w-8 h-8  m-2 hover:cursor-pointer hover:opacity-50 transition-all'/>
            </a>
        </div>
        <div className=' w-16 h-16 rounded-xl'>
            <a href="https://discord.gg/3QqSP9dRSm/">
                <img className='w-8 h-8 m-2 hover:cursor-pointer hover:opacity-50 transition-all fill-amber-400' src={discordIcon}/>
            </a>
        </div>
        <div className=' w-16 h-16 rounded-xl'>
            <a href="https://www.instagram.com/islandhacks/">
                <img className='w-8 h-8 m-2 hover:cursor-pointer hover:opacity-50 transition-all fill-amber-400' src={instagramIcon}/>
            </a>
        </div>
    </div>
  )
}

export default Socials