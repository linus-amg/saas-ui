import MotionBox from '@/components/motion/Box'
import React from 'react'

export const FallInPlace = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <MotionBox
      initial={{ scale: 0.8, opacity: 0, translateY: '-50px' }}
      animate={{ scale: 1, opacity: 1, translateY: 0 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 1, delay: 0.2 }}
    >
      {children}
    </MotionBox>
  )
}
