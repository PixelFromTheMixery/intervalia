from pydantic import BaseModel
from typing import List

class Property(BaseModel):
    name: str
    type: str
    value: List[str|int|List] = None