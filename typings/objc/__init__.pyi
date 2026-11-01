"""Subset of the PyObjC bridge used by this application's macOS adapter."""

class objc_object:
    def __init__(self, *, c_void_p: int) -> None: ...
