import AuthLeft from '@/app/components/auth/AuthLeft'
import '../css/auth.css'
import AuthRight from '@/app/components/auth/AuthRight'

const AuthPage = () => {
  return (
    <div className='flex max-[1025px]:flex-col max-lg:max-h-screen'>
      <AuthLeft/>
      <AuthRight/>
    </div>
  )
}

export default AuthPage