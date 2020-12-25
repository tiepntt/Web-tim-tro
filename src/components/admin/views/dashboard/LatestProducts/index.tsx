import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const data = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/static/images/products/product_1.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
];

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  image: {
    height: 48,
    width: 48,
  },
});

interface Props {
  className?: string;
}
export const LatestProducts = (props: Props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />

      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}></Box>
    </Card>
  );
};
