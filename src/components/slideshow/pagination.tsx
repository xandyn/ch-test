import { motion } from 'framer-motion'
import './style.scss'

type Props = {
  page: number
  total: number
}

export const Pagination = (props: Props) => {
  const { total, page } = props
  const pages = [...Array(total).keys()]

  return (
    <div className="pagination">
      <div className="container">
        {pages.map((value) => (
          <motion.div
            key={value}
            className="indicator"
            animate={{
              backgroundColor: page === value ? '#00A0D0' : '#BDEFFF',
              width: page === value ? '32px' : '6px',
            }}
          />
        ))}
      </div>
    </div>
  )
}
