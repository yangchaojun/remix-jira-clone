import Logo from '~/components/Logo'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { RxQuestionMarkCircled } from 'react-icons/rx'

function Item({ children }: { children: React.ReactElement }) {
  return (
    <div className="relative w-full h-[42px] flex items-center text-[#deebff] transition-[color] duration-100 cursor-pointer select-none hover:bg-white/10">
      {children}
    </div>
  )
}

function ItemText({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-3 invisible opacity-0 uppercase transition-all duration-100 transition-[left] transition-opacity transition-[visibility] text-[12px] group-hover:left-16 group-hover:visible group-hover:opacity-100 font-bold">
      {children}
    </div>
  )
}

export default function NavbarLeft() {
  return (
    <aside className="group fixed z-100 top-0 left-0 overflow-x-hidden h-screen w-[64px] bg-[#0747A6] transition-all duration-100 hover:w-[200px] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.6)]">
      <div className="relative left-0 mt-5 mb-[10px] mx-0 transition-[left] duration-100">
        <Logo size={28} className="text-white inline-block ml-2 p-[10px]" />

        <Item>
          <>
            <FiSearch className="absolute left-[22px] text-xl" />
            <ItemText>Search issues</ItemText>
          </>
        </Item>

        <Item>
          <>
            <FiPlus className="absolute left-5 text-2xl" />
            <ItemText>Create Issue</ItemText>
          </>
        </Item>
      </div>
      <div className="absolute bottom-5 left-0 w-full">
        <Item>
          <>
            <RxQuestionMarkCircled className="absolute left-5 text-2xl" />
            <ItemText>About</ItemText>
          </>
        </Item>
      </div>
    </aside>
  )
}
