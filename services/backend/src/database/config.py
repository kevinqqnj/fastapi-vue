import os

DATABASE_TEST_URL='postgres://hello_fastapi:hello_fastapi@localhost:5432/hello_fastapi_dev'
TORTOISE_ORM = {
    "connections": {"default": os.environ.get("DATABASE_URL", DATABASE_TEST_URL)},
    "apps": {
        "models": {
            "models": [
                "src.database.models", "aerich.models"
            ],
            "default_connection": "default"
        }
    }
}
