import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

interface Props {
  children: any;
  title: string;
  className?: any;
}
const Page = forwardRef((props: Props, ref) => {
  const { children, title = "", ...rest } = props;
  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

export default Page;
