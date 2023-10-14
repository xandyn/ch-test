import { motion } from 'framer-motion'
import './style.scss'

type Props = {
  page: number
}

export const ContentText = ({ page }: Props) => {
  const content1 = (
    <>
      <h2>
        Unlock unbeatable <i>savings!</i>
      </h2>
      <p>
        Get notified instantly when the price of your hotel drops so you can cancel, rebook and
        save!
      </p>
    </>
  )
  const content2 = (
    <>
      <h2>
        Create your <i>subscription list!</i>
      </h2>
      <p>
        Easily subscribe to hotels that catch your eye and receive notifications when there's a
        price decrease or change in availability.
      </p>
    </>
  )
  const content3 = (
    <>
      <h2>
        Get room <i>availability updates!</i>
      </h2>
      <p>
        Be the first to know when a room becomes available in your chosen hotel. Never miss the
        opportunity to book your preferred accommodation again!
      </p>
    </>
  )

  const contents = [content1, content2, content3]

  return (
    <motion.div
      key={page}
      className="content-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.7 },
      }}
    >
      {contents[page]}
    </motion.div>
  )
}
