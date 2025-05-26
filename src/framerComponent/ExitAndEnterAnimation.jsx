import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
function ExitAndEnterAnimation() {
    const [animateExit, setAnimateExit] = React.useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateExit(true);
        }, 5000)
        return () => clearTimeout(timer);
    },[])
  return (
    <div>
        <div className='bg-white w-32 h-32 rounded-full mx-auto mt-10 mb-20'>
            <AnimatePresence>
            {!animateExit && <motion.div className='bg-amber-500 w-full h-full rounded-full'
               initial={{ opacity: 0}}
               animate={{opacity: 1}}
               transition={{
                duration: 5
               }}
               exit={{ opacity: 0}}
               >

            </motion.div>}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default ExitAndEnterAnimation