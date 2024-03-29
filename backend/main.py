# BUILTIN modules
import argparse

# Third party modules
import uvicorn

# Local modules
from src.main import log_level


# ---------------------------------------------------------
if __name__ == "__main__":
    Form = argparse.ArgumentDefaultsHelpFormatter
    description = "A utility script that let you start the app choosing reload or not."
    parser = argparse.ArgumentParser(description=description, formatter_class=Form)
    parser.add_argument(
        "-r", action="store_true", dest="reload", default=False, help="Activate reload"
    )
    args = parser.parse_args()

    # Define default parameters that are used by all.
    uv_config = {
        "app": "src.main:app",
        "port": 8002,
        "log_level": log_level,
        "log_config": {"disable_existing_loggers": False, "version": 1},
    }

    # Add the parameters that reload needs.
    if args.reload:
        uv_config |= {"reload": True}

    uvicorn.run(**uv_config)
