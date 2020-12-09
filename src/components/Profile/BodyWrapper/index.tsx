import React from "react";

interface Props {
  children: any;
}

export const BodyWrapper = (props: Props) => {
  const { children } = props;
  return (
    <div className="relative min-h-screen">
      <main className="w-full min-h-screen">{children}</main>
    </div>
  );
};
