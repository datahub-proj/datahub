import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordRoot, ContentBox } from 'styles/pages/auth/ForgotPasswordPage';

const ForgotPasswordPage = () => {
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

export default ForgotPasswordPage;
