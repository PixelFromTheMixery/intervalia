from services.health_service import HealthService
from utils.logger import logger

import requests
from fastapi import APIRouter, Depends
from http import HTTPStatus

router = APIRouter()

def get_health_service():
    return HealthService

@router.get("/", tags=["general"])
async def get_root():
    """Root Endpoint"""
    logger.info("Root endpoint called")
    return {"Intervalia": "Currently maintained by Pixel from the Mixery"}

@router.get("/health", tags=["general"])
async def get_health(health_service: HealthService = Depends(get_health_service)):
    """Health Endpoint, should always return 200 OK"""
    logger.info("Health endpoint called")
    return await health_service.check_health("OK")