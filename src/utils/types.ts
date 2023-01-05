export interface ProfileProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface GuarantorProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface EducationProps {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

export interface SocialProps {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface UserProps {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: ProfileProps;
  guarantor: GuarantorProps;
  accountBalance: string;
  accountNumber: string;
  socials: SocialProps;
  education: EducationProps;
  id: string;
}

export interface IProps {
  isSidebarOpen: boolean;
  allUsers: UserProps[];
  loginUsers: UserProps[];
  loading: boolean;
  showModal: boolean;
  error: boolean;
}

export interface NewUserProps {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

export interface FilterOrganizationProps {
  orgName: string;
  status: string;
}

export interface LayoutProps {
  children: any;
  useClass: boolean;
  changeHeight: boolean;
  checkPageType: boolean;
}

export interface MobileSidebarProps {
  checkPageType: boolean;
}

export interface ModalProps {
  chosenUser: string;
}

export interface PaginationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: React.SetStateAction<number>;
}

export interface PersonalInformationProps {
  singleData: UserProps;
}

export interface SidebarProps {
  changeHeight: boolean;
  checkPageType: boolean;
}

export interface TableProps {
  followers: UserProps[] | [];
  setFollowers: React.SetStateAction<UserProps[] | any>;
  itemSize: string;
  chosenUser: string;
  setItemSize: React.SetStateAction<string>;
}

export interface TableIProps {
  checkPageType: boolean;
}
