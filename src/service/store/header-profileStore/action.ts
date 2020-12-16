export const NAV_F_CHANGE_TYPE = "NAV_F_CHANGE_TYPE";
export const changeTypeAdd = (type: string) => {
  return {
    type: NAV_F_CHANGE_TYPE,
    playload: type,
  };
};
export interface headerAction {
  type: string;
  payload: string;
}
