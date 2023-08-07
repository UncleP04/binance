'use client'
import Signin from '@/components/signup';
import React from 'react';
import { useRouter } from 'next/navigation';

const Register: React.FC = () => {
    const router = useRouter();
    return (
        <div>   
            <Signin router={router} />
        </div>
    )
}

export default Register;
