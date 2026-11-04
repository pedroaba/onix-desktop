from src.models.qss.rule import QSSRule, QSSSelector, QSSStrResult


class QSSBuilder:
    def __init__(self, qss_rules: list[QSSRule] | None = None) -> None:
        self.__qss_rules: list[QSSRule] = qss_rules or []

    def add_rule(self, rule: QSSRule) -> None:
        self.__qss_rules.append(rule)

    def build(self) -> QSSStrResult:
        qss_str = ""
        for rule in self.__qss_rules:
            properties_str = "\n".join(list(map(lambda x: x.build(), rule.rules)))
            selectors_str = "__COMMA__\n".join(
                list(map(lambda x: x.value, rule.selectors))
            ).replace("__COMMA__", ",")

            rule_str = "__SELECTOR__ {\n__PROPERTIES__\n}"
            rule_str = rule_str.replace("__SELECTOR__", selectors_str)
            rule_str = rule_str.replace("__PROPERTIES__", properties_str)

            qss_str += f"\n\n{rule_str}"

        return QSSStrResult(qss_str)


if __name__ == "__main__":
    builder = QSSBuilder()

    rule = QSSRule(selectors=[QSSSelector("QWidget")], rules=[])
    rule.set_property("font-family", '"Segoe UI", "Helvetica Neue", Arial')
    rule.set_property("font-size", "14px")

    builder.add_rule(rule)

    rule = QSSRule(selectors=[QSSSelector("QLabel#PageTitle")], rules=[])
    rule.set_property("font-weight", "600")
    rule.set_property("font-size", "29px")

    builder.add_rule(rule)

    rule = QSSRule(
        selectors=[QSSSelector("QLabel#SidebarTitle"), QSSSelector("QLabel#DetailsHeading")],
        rules=[],
    )
    rule.set_property("font-weight", "600")
    rule.set_property("font-size", "16px")

    builder.add_rule(rule)

    qss = builder.build()
    qss.print_color_full()
