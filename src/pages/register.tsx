import React from 'react';
import Signin from '../components/signup';
import { NextRouter } from 'next/router';
interface SigninComponentProps {
    router: NextRouter;
  }

const Register: React.FC<SigninComponentProps> = ({ router }) => {
    return (
        <div>   
            <Signin router={router} />
        </div>
    )
}

export default Register;
