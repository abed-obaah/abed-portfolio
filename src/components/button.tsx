import classNames from "classnames";
import { CalendarIcon, FileLinkIcon } from "@/assets/icons";

type Icons = "file-link" | "calendar";

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

const ICONS_MAPPER: Record<
  Icons,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  "file-link": FileLinkIcon,
  calendar: CalendarIcon,
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

  const IconNode = ICONS_MAPPER[icon];

  if (href) {
    return (
      <a href={href} className={btnClassnames} target="_blank">
        {text}
        {icon ? <IconNode width={20} height={20} /> : null}
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
      {icon ? <IconNode width={20} height={20} /> : null}
    </button>
  );
};

export default CustomButton;
