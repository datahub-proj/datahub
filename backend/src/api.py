from fastapi import APIRouter

from src.users.views import user_router

router = APIRouter()

router.include_router(user_router)
