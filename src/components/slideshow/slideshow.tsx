import { motion, AnimatePresence } from 'framer-motion'
import { Pagination } from '@/components/slideshow/pagination.tsx'
import './style.scss'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

type Props = {
  images: string[]
  page: number
  direction: number
}

export const Slideshow = (props: Props) => {
  const { images, page, direction } = props
  const image = images[page]

  return (
    <div className="slideshow">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={image}
          src={image}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        />
      </AnimatePresence>
      <Pagination page={page} total={images.length} />
    </div>
  )
}
