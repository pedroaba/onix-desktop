import platform
from functools import wraps
from typing import Callable


def os_restriction[**P, R](
    *operational_systems: str,
) -> Callable[[Callable[P, R]], Callable[P, R | None]]:
    def decorator(func: Callable[P, R]) -> Callable[P, R | None]:
        @wraps(func)
        def wrapper(*args: P.args, **kwargs: P.kwargs) -> R | None:
            if platform.system() not in operational_systems:
                return None

            return func(*args, **kwargs)

        return wrapper

    return decorator
