import { LanguageSwitcher, MenuItem } from '../components'
import { Menus } from '../utils/helper'

const Header = () => {
  return (
    <>

      <div className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-8 lg:pb-0 z-50">
        <div className="absolute top-6 max-sm:hidden grayscale-[80%] hover:grayscale-0">
          <LanguageSwitcher />
        </div>
        <div className="max-sm:py-2 px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col items-center justify-center gap-12 max-sm:gap-8 duration-200 backdrop-blur-md">
          {Menus &&
            Menus.map((item, index) => <MenuItem key={index} menu={item} />)}
        </div>
      </div>
    </>
  )
}

export default Header
