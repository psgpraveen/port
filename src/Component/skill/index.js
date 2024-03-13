import React from 'react'
import {motion} from 'framer-motion'
import img from './nodejs-express-tutorial-2021.png'
const index = () => {
  return (
    <div  className='w-full lg:h-48 flex flex-col lg:flex-row overflow-hidden px-16'>
      <motion.img initial={{y:+100}}whileInView={{y:1,transition:{duration:1}}}className='h-full w-fit'src='https://icon-library.com/images/html5-icon-png/html5-icon-png-1.jpg'height={100} width={100}/>
      <motion.img initial={{y:-100}}whileInView={{y:1,transition:{duration:1}}}className='h-full w-fit'src='https://i0.wp.com/www.diginixai.com/wp-content/uploads/2020/02/pngkey.com-react-logo-png-2224863-350x250.png'height={100} width={100}/>
      <motion.img initial={{y:+100}}whileInView={{y:1,transition:{duration:1}}}className='h-full w-fit'src='https://branditechture.agency/brand-logos/wp-content/uploads/2022/09/MongoDB-1024x784.png'height={100} width={100}/>
      <motion.img initial={{y:-100}}whileInView={{y:1,transition:{duration:1}}}className='h-full w-fit'src={img}height={100} width={100}/>
    
    </div>
  )
}

export default index
