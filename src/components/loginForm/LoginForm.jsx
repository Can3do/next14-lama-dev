'use client'
import { useFormState } from 'react-dom'
import SuccessFormAlert from '../successFormAlert'
import ErrorFormAlert from '../errorFormAlert'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { login } from "@/lib/action";


const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined)
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state, router])

    return (
        <form action={formAction} className="w-full max-w-sm">
        <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-semibold leading-6 text-white">Username</label>
            <input type="text" id="username" placeholder="username" name="username" className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800"/>
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-white">Password</label>
            <input type="password" id="password" placeholder="password" name="password" className="mt-2 appearance-none text-white bg-slate-900 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 ring-1 ring-slate-800"/>
        </div>

        <div className="flex flex-col gap-4">
            <button type="submit" className="inline-flex justify-center rounded-lg text-md font-semibold py-2.5 px-4 bg-blue-700 text-white hover:bg-blue-600 w-full">Login</button>
        </div>

        <div className='pt-4'>
                {state?.error && <ErrorFormAlert error={state.error}/>}
                {state?.success && <SuccessFormAlert />}
            </div>
    </form>
    )
}

export default LoginForm