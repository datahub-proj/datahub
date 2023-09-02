import { Box, Button, Card, Grid, styled, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center'
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: 32,
  background: theme.palette.background.default
}));

const ForgotPasswordRoot = styled(JustifyBox)(() => ({
  background: '#ffffff',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    margin: '1rem',
    borderRadius: 12,
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
  }
}));

const AuthForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@example.com');

  const handleFormSubmit = () => {
    console.log(email);
  };

  return (
    <ForgotPasswordRoot>
      <Card className="card">
        <Grid container>
          <ContentBox>
            <form onSubmit={handleFormSubmit}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                비밀번호 찾기
              </Typography>
              <TextField
                type="email"
                name="email"
                size="small"
                label="이메일"
                value={email}
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 3, width: '100%' }}
              />

              <Button fullWidth variant="contained" color="primary" type="submit">
                비밀번호 초기화
              </Button>

              <Button
                fullWidth
                color="primary"
                variant="outlined"
                onClick={() => navigate(-1)}
                sx={{ mt: 2 }}
              >
                뒤로
              </Button>
            </form>
          </ContentBox>
        </Grid>
      </Card>
    </ForgotPasswordRoot>
  );
};

export default AuthForgotPassword;
