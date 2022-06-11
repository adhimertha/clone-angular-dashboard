
export interface SideMenuList {
  title: string;
  url: string;
  icon: string;
  id: string;
  childrenOf: string;
  disabled?: boolean;
  open?: boolean;
}

export interface SideMenu extends SideMenuList {
  children?: SideMenuList[];
}
