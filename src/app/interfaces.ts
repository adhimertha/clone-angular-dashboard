export interface User {
  access_token: string;
  companyId: string;
  username: string;
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

export interface FindDepartmentResponse {
  name: string;
  numberOfUsers?: string | Number;
  numberOfProperties?: string | Number;
  listings: {
    _id: string; // listingRef
    name: string;
    country: string;
  }[];
}

export interface DepartmentDetail {
  _id?: string;
  name?: string;
  usersRef?: Number;
  listingsRef?: FindDepartmentResponse[];
}

export interface Department {
  _id: string;
  name: string;
  numberOfUsers: number;
  numberOfProperties: number;
}
