import { Ionicons } from "@expo/vector-icons";

type IconName =
  | "home"
  | "list"
  | "person"
  | "eye"
  | "eye-off"
  | "add"
  | "close"
  | "chevron-back";

type IconStyle = "regular" | "outline";

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  variant?: IconStyle;
};

export function Icon({
  name,
  size = 22,
  color = "#000",
  variant = "regular",
}: Props) {
  const iconName =
    variant === "outline" ? `${name}-outline` : name;

  return (
    <Ionicons
      name={iconName as any}
      size={size}
      color={color}
    />
  );
}

