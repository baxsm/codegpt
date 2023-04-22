import {Link} from 'react-router-dom'
import Button from '../ui/Button'
import Heading from '../ui/Heading'
import ThemeToggle from '../ThemeToggle'

const navLinks = [
  {
    title: 'Languages',
    ref: '#languages'
  },
  {
    title: 'Contact Us',
    ref: '#contact',
  }
]

const HeaderLP = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <div>
        <h5>CodeGPT</h5>
      </div>
      <div className="flex justify-center place-items-center gap-8">
        {
          navLinks.map((item, index) => {
            return (
              <Link to={item.ref} key={index}>
                <Heading size='xs'>{item.title}</Heading>
              </Link>
            )
          })
        }
        <ThemeToggle />
        <Button variant='outline'>Sign in</Button>
      </div>
    </div>
  )
}

export default HeaderLP