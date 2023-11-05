import classNames from "classnames";
import { FileLinkIcon } from "@/assets/icons";

type Icons = "file-link";

interface IButton {
  text?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  icon?: Icons;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  rounded?: boolean;
  fullWidth?: boolean;
}

const ICONS_MAPPER: Record<Icons, React.ReactNode> = {
  "file-link": <FileLinkIcon width={20} height={20} />,
};

const CustomButton: React.FC<IButton> = ({
  type = "button",
  size = "sm",
  text,
  href,
  onClick,
  fullWidth,
  isLoading,
  disabled,
  rounded,
  icon,
}) => {
  const btnClassnames = classNames(
    "bg-orange-strong text-dark font-semibold flex items-center justify-center gap-3 px-8 hover:shadow-2xl hover:shadow-orange-strong select-none transition",
    {
      "h-9 text-base": size === "sm",
      "h-12": size === "md",
      "h-14 text-lg rounded-lg": size === "lg",
      "w-full": fullWidth,
      "rounded-full": rounded,
    }
  );

  if (href) {
    return (
      <a href={href} className={btnClassnames} target="_blank">
        {text}
        {icon ? ICONS_MAPPER[icon] : null}
      </a>
    );
  }

  return (
    <button
      type={type === "button" ? "button" : "submit"}
      className={btnClassnames}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {text}
      {icon ? ICONS_MAPPER[icon] : null}
    </button>
  );
};

export default CustomButton;
