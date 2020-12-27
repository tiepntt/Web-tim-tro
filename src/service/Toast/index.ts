import { toast } from "react-toastify";

export const handleToast = (input: { status?: number; message?: string }) => {
  switch (input.status) {
    case 100:
    case 200:
      success(input.message);
      break;
    case 300:
    case 302:
      founded(input.message);
      break;
    case 400:
      warn(input.message);
      break;
    case 404:
      notFounded(input.message);
      break;
    default:
      error(input.message);
      break;
  }
};

function success(message?: string) {
  toast.success(message || "Thành công!");
}

function error(message?: string) {
  toast.error(message || "Thất bại!");
}

function warn(message?: string) {
  toast.warn(message || "Cần nhập đầy đủ thông tin !");
}

function founded(message?: string) {
  toast.info(message || "Sách hoặc mã sách đã tồn tại !");
}

function notFounded(message?: string) {
  toast.info(message || "Không tồn tại!");
}
