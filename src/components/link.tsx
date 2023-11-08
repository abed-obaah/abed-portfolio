// import { LinkSquareIcon, TelephoneIcon } from "@/assets/icons";

type Icons = "telephone" | "link-square";

interface CustomLinkProps {
  text: string;
  href: string;
  icon?: Icons;
}

// const ICONS_MAPPER: Record<
//   Icons,
//   React.FunctionComponent<React.SVGProps<SVGSVGElement>>
// > = {
//   "link-square": LinkSquareIcon,
//   telephone: TelephoneIcon,
// };

const CustomLink: React.FC<CustomLinkProps> = ({
  text,
  href,
  // icon = "link-square",
}) => {
  // const IconComponent = ICONS_MAPPER[icon];

  return (
    <a href={href} className="text-orange-strong hover:underline">
      <span className="whitespace-nowrap">{text}</span>
      {/* <IconComponent className="inline" width={18} height={18} /> */}
    </a>
  );
};

export default CustomLink;
