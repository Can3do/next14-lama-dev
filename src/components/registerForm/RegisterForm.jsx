'use client'
import { register } from '@/lib/action'
import { useFormState } from 'react-dom'
import SuccessFormAlert from '../successFormAlert'
import ErrorFormAlert from '../errorFormAlert'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])

    return (
        <form action={formAction} className="w-full max-w-sm">
            <div className="mb-6">
                <label htmlFor="username" className="block text-sm font-semibold leading-6 text-white">Username</label>
                <input type="text" id="username" placeholder="username" name="username" className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800"/>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                <input type="email" id="email" placeholder="email" name="email" className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800"/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold leading-6 text-white">Password</label>
                <input type="password" id="password" placeholder="password" name="password" className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800"/>
            </div>
            <div className="mb-6">
                <label htmlFor="repeat_password" className="block text-sm font-semibold leading-6 text-white">Repeat passoword</label>
                <input type="password" id="repeat_password" placeholder="repeat your password" name="repeat_password" className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800"/>
            </div>

            <button type="submit" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-blue-700 text-white hover:bg-blue-600 w-full">Register</button>

            <div className='pt-4'>
                {state?.error && <ErrorFormAlert error={state.error}/>}
                {state?.success && <SuccessFormAlert />}
            </div>
        </form>
    )
}

export default RegisterForm