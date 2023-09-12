import { LoadingButton } from '@mui/lab';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { Box, styled, useTheme } from '@mui/material';
import { Paragraph } from 'components/Typography/Typography';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const JWTRegister = styled(JustifyBox)(() => ({
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
  email: '',
  password: '',
  username: '',
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string().min(6, '비밀번호는 6자 이상입니다.').required('비밀번호를 입력하세요'),
  email: Yup.string().email('이메일 주소가 올바르지 않습니다.').required('이메일을 입력하세요')
});

const AuthRegister = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setLoading(true);

    try {
      setTimeout(() => {
        console.log(values.username, values.email, values.password);
        setLoading(false);
        navigate('/auth/login');
      }, 2000);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <JWTRegister>
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
                    회원가입
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="username"
                    label="아이디"
                    variant="outlined"
                    onBlur={handleBlur}
                    value={values.username}
                    onChange={handleChange}
                    helperText={touched.username && errors.username}
                    error={Boolean(errors.username && touched.username)}
                    sx={{ mb: 3 }}
                  />

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
                    sx={{ mb: 2 }}
                  />
                  <LoadingButton type="submit" loading={loading} variant="contained" sx={{ mb: 2 }}>
                    회원가입
                  </LoadingButton>
                  <Paragraph>
                    이미 계정이 있으신가요?
                    <NavLink
                      to="/auth/login"
                      style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                    >
                      로그인
                    </NavLink>
                  </Paragraph>
                </form>
              )}
            </Formik>
          </ContentBox>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default AuthRegister;
