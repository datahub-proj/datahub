import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField, Typography } from '@mui/material';
import { Box, styled, useTheme } from '@mui/material';
import { Paragraph } from 'components/Typography';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#ffffff',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
  }
}));

// inital login credentials
const initialValues = {
  email: 'jason@ui-lib.com',
  password: 'dummyPass',
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string().min(6, '비밀번호는 6자 이상입니다.').required('비밀번호를 입력해주세요'),
  email: Yup.string().email('이메일 주소가 올바르지 않습니다.').required('이메일을 입력해주세요')
});

const AuthLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      setTimeout(() => {
        console.log(values.email, values.password);
        setLoading(false); // 로딩 상태를 해제합니다.
        navigate('/'); // 원하는 경로로 페이지 이동합니다.
      }, 2000);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <ContentBox>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    로그인
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    type="email"
                    name="email"
                    label="이메일"
                    variant="outlined"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    helperText={touched.email && errors.email}
                    error={Boolean(errors.email && touched.email)}
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    size="small"
                    name="password"
                    type="password"
                    label="비밀번호"
                    variant="outlined"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    helperText={touched.password && errors.password}
                    error={Boolean(errors.password && touched.password)}
                    sx={{ mb: 1.5 }}
                  />

                  <FlexBox justifyContent="space-between">
                    <FlexBox gap={1}>
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph>비밀번호 기억하기</Paragraph>
                    </FlexBox>

                    <NavLink
                      to="/auth/forgot-password"
                      style={{ color: theme.palette.primary.main }}
                    >
                      비밀번호를 잊으셨나요?
                    </NavLink>
                  </FlexBox>

                  <LoadingButton
                    type="submit"
                    color="primary"
                    loading={loading}
                    variant="contained"
                    sx={{ my: 3 }}
                  >
                    로그인
                  </LoadingButton>
                  <Paragraph>
                    계정이 없으신가요?
                    <NavLink
                      to="/auth/register"
                      style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                    >
                      회원가입
                    </NavLink>
                  </Paragraph>
                </form>
              )}
            </Formik>
          </ContentBox>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default AuthLogin;
