from utils.docs import description, tags_metadata
from middlewares.exception_middleware import ExceptionMiddleware
import routers

from fastapi import FastAPI

app = FastAPI(
    title="🍅 Intervalia Endpoints",
    description=description,
    summary="API endpoints for the Intervalia App",
    openapi_tags= tags_metadata
)

app.add_middleware(ExceptionMiddleware)

app.include_router(routers.v1_router, prefix="/api")
