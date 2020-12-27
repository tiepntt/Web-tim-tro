import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TYPE_APPROVE } from "..";
import { EmploymentAPI } from "../../../../../api/admin/employment";
import { UserGetDto } from "../../../../../api/user/user/dto";
import { CommentItemList } from "../../../../../containers/Label/commentitem";
import { PaginationItem } from "../../../../../containers/pagination";
import { RoleAdmin } from "../../../../../libs/constants/role";
import { handleToast } from "../../../../../service/Toast";
import { RootState } from "../../../../../store";
import { SideBarUser } from "../../user/employment/sidebar";
import { ListComment } from "./list";

interface Props {
  type?: string;
}
const filterData = [
  { key: "approve", name: "Đã duyệt", value: 1, id: 1 },
  { key: "approve", name: "Chưa duyệt", value: 0, id: 2 },
];

export const CommentDashBoard = (props: Props) => {
  const { type } = props;
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const [reviews, setReviews] = useState({
    data: [] as UserGetDto[],
    count: 0,
  });

  const [conditionFilter, setFilter] = useState({
    page: 1,
    take: 5,
    skip: 0,
    key: "",
  });
  const getAllComments = () => {
    EmploymentAPI.getAllReviewApartmentApproveYet(conditionFilter).then(
      (res) => {
        if (res.data.status === 200) {
          setReviews(res.data.result);
        }
      }
    );
  };
  const getAllReport = () => {
    EmploymentAPI.getAllReportApartmentApproveYet(conditionFilter).then(
      (res) => {
        if (res.data.status === 200) {
          setReviews(res.data.result);
        }
      }
    );
  };
  useEffect(() => {
    switch (type) {
      case TYPE_APPROVE.COMMENT:
        getAllComments();
        break;
      case TYPE_APPROVE.REPORT:
        getAllReport();
        break;
      default:
        break;
    }
  }, [type, conditionFilter]);
  const onPageChange = (page: number) => {
    let old = { ...conditionFilter };
    setFilter({ ...conditionFilter, page: page, skip: (page - 1) * old.take });
  };
  const onSearch = (key: string) => {


    setFilter({
      ...conditionFilter,
      page: 1,
      skip: 0,
      key: key,
    });
  };
  const approve = (id: number) => {
    switch (type) {
      case TYPE_APPROVE.COMMENT:
        EmploymentAPI.approveReview(id).then((res) => {
          handleToast(res.data);
          if (res.data.status === 200) {
            setFilter({
              ...conditionFilter,
            });
          }
        });
        break;
      case TYPE_APPROVE.REPORT:
        EmploymentAPI.approveReport(id).then((res) => {
          handleToast(res.data);
          if (res.data.status === 200) {
            setFilter({
              ...conditionFilter,
            });
          }
        });
        break;
      default:
        break;
    }
  };
  const remove = (id: number) => {
    switch (type) {
      case TYPE_APPROVE.COMMENT:
        EmploymentAPI.removeReview(id).then((res) => {
          handleToast(res.data);
          if (res.data.status === 200) {
            setFilter({
              ...conditionFilter,
            });
          }
        });
        break;
      case TYPE_APPROVE.REPORT:
        EmploymentAPI.removeReport(id).then((res) => {
          handleToast(res.data);
          if (res.data.status === 200) {
            setFilter({
              ...conditionFilter,
            });
          }
        });
        break;
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="user-list">
        <div className="row">
          <div className="col-lg-8 col-12">
            <ListComment
              comments={reviews.data}
              type={type}
              onSelect={approve}
              onRemove={remove}
            />
            <div className="pagination" style={{ marginTop: 10 }}>
              <PaginationItem
                pageActive={conditionFilter.page}
                lastPage={Math.ceil(reviews.count / conditionFilter.take)}
                onPageChange={onPageChange}
              />
            </div>
          </div>
          <div className="col-lg-4 col-12" style={{ marginBottom: "10px" }}>
            <SideBarUser
              filter={
                type === RoleAdmin.OWNER && user?.role?.code === RoleAdmin.ADMIN
              }
              count={reviews.count}
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
    </>
  );
};
