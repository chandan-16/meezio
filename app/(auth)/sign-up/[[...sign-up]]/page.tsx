import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-amber-100'>
        <SignUp />
    </main>
  )
}

export default SignUpPage