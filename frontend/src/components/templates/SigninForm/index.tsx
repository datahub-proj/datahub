'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import InputGroup from '../InputGroup';
import Button from '@/components/common/Button';

import {
  signinSchema,
  SignInSchemaType,
} from '@/features/Authentication/schema/signinSchema';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signinSchema),
  });

  // TODO
  // INPUT을 모두 입력했을 때 로그인 버튼 활성화
  //  const [submitBtnDisabled, setSubmitBtnDisabled] = React.useState(true);

  const onSubmit: SubmitHandler<SignInSchemaType> = (data) => console.log(data);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-bold mb-[24px] text-white">로그인</h2>
      <div className="flex flex-col gap-3">
        <InputGroup
          id="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <InputGroup
          id="password"
          label="비밀번호"
          type="password"
          placeholder={'비밀번호를 입력해주세요.'}
          errorMessage={errors.password?.message}
          {...register('password')}
        />

        <Button type="submit">로그인</Button>
      </div>
    </form>
  );
}
