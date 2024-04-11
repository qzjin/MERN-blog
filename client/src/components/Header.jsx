import { Navbar, TextInput, Button } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import Logo from './Logo'
export default function Header() {
    const path = useLocation().pathname
    return (
        <Navbar fluid className='border-b-2'>
            <Navbar.Brand as={Link} to='/' className='font-semibold ml-2 sm:ml-6 text-sm sm:text-xl whitespace-nowrap'>
                <Logo/>
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
            <Navbar.Toggle />
        </Navbar>
    )
}
