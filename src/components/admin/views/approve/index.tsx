import React from "react";
import { TabsRender } from "../../../../containers/Tabs";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { LabelIcon } from "../../../../containers/Label/Icon";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

import { RoleAdmin } from "../../../../libs/constants/role";
import { Employment } from "../user/employment";
import { CommentDashBoard } from "./comments";
interface Props {}
export const TYPE_APPROVE = {
  COMMENT: "COMMENT",
  REPORT: "REPORT",
};
const userTab = [
  {
    label: <LabelIcon label="Bình luận" icon={<SupervisorAccountIcon />} />,
    component: <CommentDashBoard type={TYPE_APPROVE.COMMENT} />,
    icon: SupervisorAccountIcon,
    private: [RoleAdmin.MANAGER],
  },
  {
    label: <LabelIcon label="Báo cáo" icon={<AccountBalanceIcon />} />,
    component: <CommentDashBoard type={TYPE_APPROVE.REPORT} />,
    icon: SupervisorAccountIcon,
    private: [RoleAdmin.MANAGER, RoleAdmin.ADMIN],
  },
];
export const ApproveDashboard = (props: Props) => {
  return (
    <>
      <TabsRender input={userTab} />
    </>
  );
};
