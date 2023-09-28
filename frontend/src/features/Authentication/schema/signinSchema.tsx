import { z } from 'zod';

export type SignInSchemaType = z.infer<typeof signinSchema>;

export const signinSchema = z.object({
  email: z
    .string()
    .nonempty('이메일을 입력해주세요.')
    .email('이메일 형식을 올바르게 입력해주세요. ex) example@gmail.com'),
  password: z.string().nonempty('비밀번호를 입력하지 않으셨습니다.'),
});
