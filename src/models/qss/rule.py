from dataclasses import dataclass

from rich.console import Console
from rich.syntax import Syntax


@dataclass(frozen=True)
class QSSRuleProperty:
    key: str
    value: str

    def build(self) -> str:
        return f"  {self.key}: {self.value};"


@dataclass(frozen=True)
class QSSSelector:
    value: str


@dataclass(frozen=True)
class QSSStrResult:
    value: str

    def print_color_full(self, theme: str = "monokai", background_color: str = "default") -> None:
        console = Console()
        console.print(
            Syntax(self.value.strip(), "css", theme=theme, background_color=background_color)
        )


@dataclass(frozen=True)
class QSSRule:
    selectors: list[QSSSelector]
    rules: list[QSSRuleProperty]

    def set_property(self, key: str, value: str) -> None:
        qss_property = QSSRuleProperty(key, value)
        self.rules.append(qss_property)
