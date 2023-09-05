# Third party modules
from dotenv import load_dotenv
from pydantic import BaseSettings


# ---------------------------------------------------------
#
class Configuration(BaseSettings):
    """Configuration parameters."""

    # project
    name: str
    version: str

    db_url: str

    jwt_secret: str
    jwt_algorithm: str


# ---------------------------------------------------------

# Note that the ".env" file is always implicitly loaded.
load_dotenv()

config = Configuration()
""" Configuration parameters instance. """
