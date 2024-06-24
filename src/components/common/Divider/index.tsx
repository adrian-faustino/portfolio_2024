interface DividerProps {
  type?: "vertical" | "horizontal" | "dot";
}

export function Divider({ type = "vertical" }: DividerProps) {
  const getInnerText = () => {
    switch (type) {
      case "vertical":
        return "|";
      case "horizontal":
        return "-";
      case "dot":
        return "•";
    }
  };
  return <span>{getInnerText()}</span>;
}
