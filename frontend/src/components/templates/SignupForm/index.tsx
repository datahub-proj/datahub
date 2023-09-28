'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import InputGroup from '../InputGroup';
import Button from '@/components/common/Button';

import {
  signupSchema,
  SignUpSchemaType,
} from '@/features/Authentication/schema/signupSchema';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  // TODO
  // INPUT을 모두 입력했을 때 가입 버튼 활성화
  //  const [submitBtnDisabled, setSubmitBtnDisabled] = React.useState(true);

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-bold mb-[24px] text-white">회원가입</h2>
      <div className="flex flex-col gap-3">
        <InputGroup
          id="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <InputGroup
          id="name"
          label="아이디"
          placeholder="아이디를 입력해주세요."
          errorMessage={errors.name?.message}
          {...register('name')}
        />

        <InputGroup
          id="password"
          label="비밀번호"
          type="password"
          placeholder={'비밀번호를 입력해주세요.'}
          errorMessage={errors.password?.message}
          {...register('password')}
        />

        <InputGroup
          id="passwordCheck"
          label="비밀번호 확인"
          type="password"
          placeholder={'비밀번호를 다시 입력해주세요'}
          errorMessage={errors.passwordCheck?.message}
          {...register('passwordCheck')}
        />

        <Button type="submit">가입하기</Button>
      </div>
    </form>
  );
}
