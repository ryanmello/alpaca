'use client'

import { IconType } from "react-icons"

interface AuthSocialButtonProps {
    icon: IconType;
    label: string;
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ icon: Icon, label, onClick}) => {
  return (
    <button type="button" onClick={onClick} className="w-full flex justify-center items-center p-4 ring-1 ring-gray-300 rounded-full hover:bg-gray-100">
        <Icon size={20}/>
        <p className="font-semibold pl-2">{`Continue with ${label}`}</p>
    </button>
  )
}

export default AuthSocialButton
