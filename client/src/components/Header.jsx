import { Navbar, TextInput, Button } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
export default function Header() {
    const path = useLocation().pathname
    return (
        <Navbar className='border-b-2'>
            <Navbar.Toggle />
            <Navbar.Brand as={Link} to='/'>
                <span to='/' className='self-center whitespace-nowrap text-sm sm:text-xl
                font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-br 
                 from-purple-500 via-indigo-500 to-sky-500 
                rounded-lg text-white'>Aurora's</span>
                    Blog
                </span>
            </Navbar.Brand>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to='sign-in'>
                    <Button outline gradientDuoTone="purpleToBlue">
                        Sign In
                    </Button>
                </Link>

            </div>
            <Navbar.Collapse>
                <Navbar.Link href='/' active={path === '/'}>
                    Home
                </Navbar.Link>
                <Navbar.Link href='/about' active={path === '/about'}>
                    About
                </Navbar.Link>
                <Navbar.Link href='/projects' active={path === '/projects'}>
                    Project
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
