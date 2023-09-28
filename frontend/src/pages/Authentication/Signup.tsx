import SignUpForm from '@/components/templates/SignupForm';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <>
      <main className="w-screen h-screen flex flex-col justify-center items-center bg-black3">
        <div className="rounded-md border-5 border-strokedark w-full md:w-[640px]">
          <div className="flex flex-col p-4 sm:p-12.5 xl:p-17.5 gap-3">
            <SignUpForm />

            <div className="flex justify-center mt-6 gap-3.5">
              <p className="text-white font-medium">이미 가입하셨나요? </p>
              <Link
                to="/auth/signin"
                className="text-secondary hover:text-opacity-90"
              >
                로그인
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
