import "./style.scss";
import {Row} from "react-bootstrap";
import React from "react";

import "./style.scss";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserDetailDto} from "../../api/user/user/dto";
import {NumberDateJoin} from "../../libs/constants/function/time";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Avatar} from "@material-ui/core";

interface Props {
    user: UserDetailDto
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },

        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: 150,
            height: 150,
        },
    }),
);

export const ProfileUserInfo = (props: Props) => {
    const {user} = props;
    const classes = useStyles();

    return (
        <div className={"Info"}>
            <Row>
                <div className={"avatar-info"}>
                    <Avatar src={user?.avatar?.url ?? "https://www.avatarins.com/image/homesmall.png"}
                            className={classes.large} alt={"avatar"}/>
                </div>
                <div className="remark">
                    <div className="name">{user?.name}</div>
                    <div className="email">{user?.email}</div>
                    <div className="">
                        Đã tham gia
                        <span className="time">{NumberDateJoin(user?.create_at)}</span>
                    </div>
                    {/*<div className="page">20 tin BĐS đang đăng</div>*/}
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhoneAlt} color={"#009177"}/>
                        {"     "}
                        <span>{user?.contactUser?.phone}</span>
                    </div>
                </div>
            </Row>
        </div>
    );
};
