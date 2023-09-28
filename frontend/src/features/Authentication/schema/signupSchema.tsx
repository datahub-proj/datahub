import { z } from 'zod';

export type SignUpSchemaType = z.infer<typeof signupSchema>;

export const signupSchema = z
  .object({
    email: z
      .string()
      .nonempty('이메일을 입력해주세요.')
      .email('이메일 형식을 입력해주세요.'),
    name: z.string().nonempty('이름을 입력하지 않으셨습니다.'),
    password: z.string().nonempty('비밀번호를 입력하지 않으셨습니다.'),
    passwordCheck: z.string().nonempty('비밀번호를 다시 한번 입력해주세요.'),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 일치하지 않습니다.',
  });
