import "./style.scss";
import React from "react";

export default class Terms extends React.Component<object, object> {
    public render(): React.ReactNode {
        return (
            <div className={"term"}>
                <h1 className={"header"}> Quy định sử dụng</h1>
                <h2 className={"title"}>Trước khi bạn đăng tin lên website. xin vui lòng đọc kỹ các quy định sau
                    đây:</h2>
                <li>Không được đăng ký tài khoản và khai báo những thông tin giả mạo, đặt tên tài khoản phản cảm, thô
                    tục
                </li>
                <li>Không được phép đăng tin liên quan đến các vấn đề mà pháp luật Việt Nam không cho phép.</li>
                <li>Không được đăng những bài viết, thông tin có nội dung vi phạm pháp luật: đả kích, bôi nhọ, chỉ trích
                    hay bàn luận về chính trị, tôn giáo, phản động, kỳ thị văn hóa, dân tộc, cũng như vi phạm khác liên
                    quan đến thuần phong mỹ tục của dân tộc Việt Nam.
                </li>
                <li>Tiêu đề và nội dung của tin đăng phải dùng tiếng Việt có dấu. Không được sử dụng từ ngữ thô tục, mất
                    văn hoá.
                </li>
                <li>Tin đăng phải có địa chỉ liên lạc cụ thể không được cho địa chỉ sai. hay dùng thông tin địa chỉ của
                    người khác
                </li>
                <li>Các bài viết không có nội dung hoặc nội dung không liên quan đến chuyên mục. Những bài viết này sẽ
                    bị xóa mà không cần báo trước.
                </li>
                <li>Không tạo nhiều tài khoản để đăng tin, nếu chúng tôi phát hiện sẽ xóa và ban toàn bộ nick.</li>
                <li>Không được đăng quá nhiều tin trong ngày và không đăng tin có tiêu đề, nội dung tương tự nhau.</li>
                <li>Khi phát hiện tin đăng không đúng sự thật, hay chỗ cho thuê là dịch vụ hay cò nhà trọ, bạn vui lòng
                    thông báo cho Ban quản trị biết để chúng tôi kịp thời xử lý.
                </li>
                <li>Những trường hợp cố tình spam, vi phạm nội quy nhiều lần thì chúng tôi sẽ cấm không cho bạn đăng tin
                    và tất cả mọi tin đăng của bạn sẽ không được hiển thị trên
                    <a href="/"> TIMTRO.vn</a>
                </li>
                <li>Lưu ý thành viên phải chọn đúng khu vực ví dụ: Hồ Chí Minh, Hà Nội và chọn đúng chuyên mục như: Cho
                    thuê phòng trọ hoặc cho thuê căn hộ, tìm người ở ghép..
                </li>
                <h2 className={"title"}>Tất cả các tin đăng sai phạm quy định trên sẽ bị xóa mà không cần thông báo
                    trước. Chúng tôi không chịu trách nhiệm về nội dung các bài đăng trên website.</h2>


            </div>
        );
    }
}
