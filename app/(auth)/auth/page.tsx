import AuthLeft from '@/app/components/auth/AuthLeft'
import '../css/auth.css'
import AuthRight from '@/app/components/auth/AuthRight'

const AuthPage = () => {
  return (
    <div className='flex'>
      <AuthLeft/>
      <AuthRight/>
    </div>
  )
}

export default AuthPage