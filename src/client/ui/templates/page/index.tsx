import * as React from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";

export const Page: React.FC = ({ children }) => {
  return (
    <div>
      <Space align="center" style={{ width: "100%", justifyContent: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/joke">Joke</Link>
      </Space>
      <div>{children}</div>
    </div>
  );
};
