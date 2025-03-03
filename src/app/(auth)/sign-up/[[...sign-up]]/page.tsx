import { SignUp } from '@clerk/nextjs'

const SignupPage = () => {
  return (
    <div className='flex h-screen items-center justify-center p-3'>
        <SignUp />
    </div>
  )
}

export default SignupPage