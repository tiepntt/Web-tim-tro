import React from "react";
import { TabsRender } from "../../../../containers/Tabs";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { LabelIcon } from "../../../../containers/Label/Icon";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import { Employment } from "./employment";
import { RoleAdmin } from "../../../../libs/constants/role";
interface Props {}
const userTab = [
  {
    label: <LabelIcon label="Nhân viên" icon={<SupervisorAccountIcon />} />,
    component: <Employment type={RoleAdmin.ADMIN} />,
    icon: SupervisorAccountIcon,
    private: [RoleAdmin.MANAGER],
  },
  {
    label: <LabelIcon label="Chủ nhà trọ" icon={<AccountBalanceIcon />} />,
    component: <Employment type={RoleAdmin.OWNER} />,
    icon: SupervisorAccountIcon,
    private: [RoleAdmin.MANAGER, RoleAdmin.ADMIN],
  },
  {
    label: <LabelIcon label="Người thuê trọ" icon={<ImageSearchIcon />} />,
    component: <Employment type={RoleAdmin.RENTER} />,
    icon: SupervisorAccountIcon,
    private: [RoleAdmin.ADMIN, RoleAdmin.MANAGER],
  },
];
export const UserDashboard = (props: Props) => {
  return (
    <>
      <TabsRender input={userTab} />
    </>
  );
};
