import { MenuItemWrapper, MenuLink } from "./styled";

interface MenuItems {
  name: string;
  link: string;
}
type Props = {};

const Navbar = (props: Props) => {
  const menuItems: MenuItems[] = [
    {
      name: "About Me",
      link: "",
    },
    {
      name: "Projects",
      link: "",
    },
    {
      name: `Let's Talk`,
      link: "",
    },
  ];
  return (
    <MenuItemWrapper>
      <div style={{ fontSize: "2.5vmin" }}>LOGO</div>

      <MenuItemWrapper>
        {menuItems.map((item) => {
          const { name, link } = item;
          return (
            <a href={`${link}`}>
              <MenuLink>{name}</MenuLink>
            </a>
          );
        })}
      </MenuItemWrapper>
    </MenuItemWrapper>
  );
};

export default Navbar;
