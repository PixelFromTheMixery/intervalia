from fastapi import APIRouter

from routers.v1 import general_router

v1_router = APIRouter()

v1_router.include_router(general_router.router, prefix="/v1", tags=["v1"])