# BUILTIN modules
from pathlib import Path
from typing import Tuple

# Third party modules
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

# Local modules
from src.api import router
from src.config import config
from src.logging import CustomizeLogger
from src.docs.openapi_documentation import tags_metadata, license_info

# Constants
ROOT_PATH = Path(__file__).parent
""" OpenAPI documentation root path. """


# ---------------------------------------------------------
#
def get_description() -> str:
    """Return content of description Markdown file.

    :return: Markdown formatted description text.
    """

    with open(ROOT_PATH / "docs" / "description.md", "r") as hdl:
        md_text = hdl.read()

    return md_text


# ---------------------------------------------------------
#
def create_app() -> Tuple[FastAPI, str]:
    """Create FastAPI app structure and unified logging."""

    instance = FastAPI(
        redoc_url=None,
        title=config.name,
        version=config.version,
        license_info=license_info,
        openapi_tags=tags_metadata,
        description=get_description(),
    )

    # Needed for swagger Markdown images to be displayed.
    static_path = ROOT_PATH / "docs"
    instance.mount("/static", StaticFiles(directory=static_path))

    # Create app structure.
    level, custom_logger = CustomizeLogger.make_logger()
    instance.logger = custom_logger

    return instance, level


# ---------------------------------------------------------

# Create the FastAPI application.
app, log_level = create_app()

# Add used endpoints (and simplifying endpoint declarations).
app.include_router(router)


# ---------------------------------------------------------
#
@app.get("/")
async def root_path():
    print(config.version)
    return {"message": f"You are visiting: {config.name} v{config.version}"}
