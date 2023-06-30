'use client'

import AuthForm from "./components/AuthForm"

const Auth = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-3xl font-bold tracking-tight">Sign in to your account</h2>
      <AuthForm />
    </div>
  )
}

export default Auth

