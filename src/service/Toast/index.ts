import { toast } from "react-toastify";

export const handleToast = (input: { code?: number; message?: string }) => {
  switch (input.code) {
    case 100:
    case 200:
      success();
      break;
    case 300:
    case 302:
      founded(input.message);
      break;
    case 404:
      notFounded(input.message);
      break;
    default:
      error(input.message);
      break;
  }
};

function success() {
  toast.success("Thành công!");
}

function error(massage?: string) {
  toast.error(massage || "Thất bại!");
}

function warn(massage?: string) {
  toast.warn(massage || "Cần nhập đầy đủ thông tin !");
}

function founded(massage?: string) {
  toast.info(massage || "Sách hoặc mã sách đã tồn tại !");
}

function notFounded(massage?: string) {
  toast.info(massage || "Không tồn tại!");
}
