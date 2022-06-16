export interface User {
  name: string;
  email: string;
  username: string;
  password: string;
}

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

export interface BreadcrumbList {
  title: string;
  url: string;
  disabled?: boolean;
}

export interface Breadcrumb extends BreadcrumbList {
  parents?: BreadcrumbList[];
}
