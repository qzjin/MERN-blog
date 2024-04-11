import Logo from "../components/Logo";
import { Alert, Button, Spinner, TextInput } from 'flowbite-react'
import { HiUser, HiMail, HiLockClosed } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.")
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if (res.ok) {
        navigate('/sign-in')
      }
    } catch (err) {
      setErrorMessage(err.message)
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen mt-20 mx-5">
      <div className='flex p-3 flex-col md:flex-row md:items-center gap-6 mx-auto max-w-sm md:max-w-2xl'>
        {/* left side*/}
        <div className='flex-1'>
          <div className='text-4xl font-bold'>
            <Logo />
          </div>
          <p className="text-sm mt-5">
            This is Aurora's blog. Your are welcome to join me in documenting your life.
          </p>
        </div>

        {/*right side*/}
        <div className="flex-1">
          <form className="flex flex-col gap-6 max-w-md" onSubmit={handleSubmit}>
            <TextInput type='text' icon={HiUser} placeholder="Enter Your Username" id='username' onChange={handleChange} />
            <TextInput type='email' icon={HiMail} placeholder="Enter Your Email" id='email' onChange={handleChange} />
            <TextInput type='password' icon={HiLockClosed} placeholder="Enter Your Password" id='password' onChange={handleChange} />
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'> Loading...</span>
                </>
              ) : 'Sign Up'}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5 py-2' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div >
  )
}
