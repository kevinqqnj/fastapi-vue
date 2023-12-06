from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from tortoise import Tortoise
from fastapi.staticfiles import StaticFiles

from src.database.register import register_tortoise
from src.database.config import TORTOISE_ORM
import logging
logger = logging.getLogger(__name__)

import os

# enable schemas to read relationship between models
Tortoise.init_models(["src.database.models"], "models")

"""
import 'from src.routes import users, notes' must be after 'Tortoise.init_models'
why?
https://stackoverflow.com/questions/65531387/tortoise-orm-for-python-no-returns-relations-of-entities-pyndantic-fastapi
"""
from src.routes import users, notes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080", "http://localhost:8000", "http://127.0.0.1:8000'", "http:/127.0.0.1:8080",\
                   "https://baozhong.store/fastapi'"],
    # allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

path_prefix = '' if os.getenv('FASTAPI_MOUNT_DIR')=='root' else '/fastapi'
app.include_router(users.router, prefix=path_prefix)
app.include_router(notes.router, prefix=path_prefix)
app.mount(f"{'/' if path_prefix=='' else path_prefix}",          
          StaticFiles(directory=f'dist{path_prefix}', html=True),
          name='static Index.html')

register_tortoise(app, config=TORTOISE_ORM, generate_schemas=False)
logger.info(f'app started, {path_prefix=}')
logger.debug(f'{[{route.name: route.path} for route in app.routes]}')

@app.get("/")
def home(request: Request):
    return "Hello, World!"
