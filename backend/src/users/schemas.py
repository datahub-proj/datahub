from pydantic import BaseModel, Field


class ExceptionResponseSchema(BaseModel):
    error: str


class GetUserListResponseSchema(BaseModel):
    id: int = Field(..., description="ID")
    email: str = Field(..., description="Email")
    nickname: str = Field(..., description="Nickname")

    class Config:
        orm_mode = True


class CreateUserRequestSchema(BaseModel):
    email: str = Field(..., description="Email")
    password1: str = Field(..., description="Password1")
    password2: str = Field(..., description="Password2")
    nickname: str = Field(..., description="Nickname")


class CreateUserResponseSchema(BaseModel):
    email: str = Field(..., description="Email")
    nickname: str = Field(..., description="Nickname")

    class Config:
        orm_mode = True


class LoginRequest(BaseModel):
    email: str = Field(..., description="Email")
    password: str = Field(..., description="Password")


class LoginResponse(BaseModel):
    token: str = Field(..., description="Token")
    refresh_token: str = Field(..., description="Refresh token")
