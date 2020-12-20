import {Avatar, makeStyles} from "@material-ui/core";
import {EmailOutlined, Phone} from "@material-ui/icons";
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
export const CommentItem = (props: Props) => {
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
                    <div className="user-info-title">
                        <div className="row">
                            <a href="/profileUser" data-rb-event-key="/profileUser" className="nav-link">
                                <div className="name"> Phan Minh</div>
                            </a>
                            <div className="time">2020-12-10 17:44</div>
                        </div>
                        <div className="comment-text">Phòng trọ giá rẻ !!!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
