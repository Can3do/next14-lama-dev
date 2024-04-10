import RegisterForm from '@/components/registerForm'
import Link from 'next/link'
// import { useRouter } from 'next/router'

const RegisterPage = () => {

    // const router = useRouter()

    return(
        <div className="max-w-7xl mx-auto sm:px-16 px-6 py-4">
            <div className="w-full flex justify-center items-center py-16 flex-col">
                <h1 className=" text-white mb-8 font-semibold text-2xl">Register</h1>
                <RegisterForm/>
                <div className="flex justify-start max-w-sm w-full pt-4">
                    <Link href='/login'>Already have an account?</Link>
                </div>
            </div>
        </div>
        
    )
}

export default RegisterPage