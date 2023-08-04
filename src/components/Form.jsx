import * as React from 'react'
import LogoGoogle from '../assets/google.svg'

export default function Form(){
    return(
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
            <div className='mt-8'>
                <div className='font-medium text-lg'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email'
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                    />
                </div>
                <div className='font-medium text-lg'>
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password' 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your password'
                    />
                </div>

                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input type="checkbox" id='remember'/>
                        <label htmlFor="remember" className='ml-2 font-medium'>Remember for 30 days</label>
                    </div>
                    <button className='font-medium text-violet-500'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-violet-500 py-3 rounded-xl uppercase text-white text-lg font-bold '>
                        Sign in
                    </button>
                    <button className='flex border-2 border-gray-100 py-3 rounded-xl items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                    
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5.26620003 9.76452941c.93258751-2.82589738 3.58824912-4.8554385 6.73379997-4.8554385 1.6909091 0 3.2181818.6 4.4181818 1.58181818l3.4909091-3.49090909c-2.1272727-1.85454545-4.8545454-3-7.9090909-3-4.72993026 0-8.8022503 2.69829785-10.76000977 6.65002441z" fill="#ea4335"/><path d="m16.0407269 18.0125889c-1.0898102.7037127-2.4746377 1.0783202-4.0407269 1.0783202-3.13351387 0-5.78088061-2.0140381-6.72301823-4.8230322l-4.03951913 3.067111c1.95532787 3.9586414 6.02754029 6.6650121 10.76253736 6.6650121 2.9328362 0 5.7353462-1.0426095 7.834192-3.0004199z" fill="#34a853"/><path d="m19.834192 20.9995801c2.1949756-2.0474807 3.6203535-5.0959171 3.6203535-8.9995801 0-.7090909-.109091-1.4727273-.2727273-2.18181818h-11.1818182v4.63636368h6.4363636c-.3175904 1.5590805-1.1700642 2.7666662-2.3956367 3.5580434z" fill="#4a90e2"/><path d="m5.27698177 14.2678769c-.23865543-.7115539-.36789086-1.474118-.36789086-2.2678769 0-.7817219.12534556-1.5331879.35710912-2.23547059l-4.0262098-3.114505c-.80340306 1.61040721-1.23999023 3.42536039-1.23999023 5.34997559 0 1.9195484.44478074 3.7301709 1.23746264 5.3349879z" fill="#fbbc05"/></svg>
                        Sign in with Google   
                        
                                             
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium'>Don't hace an accoun?</p>
                    <button className='ml-2 text-violet-500 font-medium'>Sing up</button>
                </div>
            </div>
        </div>

        
    )
}