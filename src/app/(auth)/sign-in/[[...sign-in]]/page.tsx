import { SignIn } from '@clerk/nextjs'

const SigninPage = () => {
  return (
    <div className='flex h-screen items-center justify-center p-3'>
        <SignIn />
    </div>
  )
}

export default SigninPage;