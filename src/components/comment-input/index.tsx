import {Avatar, makeStyles} from "@material-ui/core";
import React from "react";
import "./style.scss";

interface Props {
}

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}));
export const CommentInput = (props: Props) => {
    const classes = useStyles();
    return (
        <div className="comment">
            <div className="user-box">
                <div className="user-info">
                    <div className="avatar">
                        <Avatar
                            src={
                                "https://cloud.mogi.vn/images/2020/11/21/581/537107b650a3455abcaa6396570f0217.jpg"
                            }
                            className={classes.large}
                            // size={32}
                        />
                    </div>
                    <div className="box-input">
                        <textarea className="text" cols={50} placeholder={"Viết bình luận ..."}></textarea>
                        <button className="button">Gửi bình luận</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
