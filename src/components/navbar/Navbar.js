import { ReloadOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, ColorPicker, theme } from "antd";
import React from "react";
import { Col, Row, Divider } from "antd";
import "./Navbar.css";
import TableList from "../tableList/TableList";
import InputCreate from "../inputCreate/InputCreate";
import StepByStep from "../StepByStep/StepByStep";

const { Header, Content, Sider } = Layout;
const items1 = [
  "Hệ Thống",
  "Danh Mục",
  "Số Liệu",
  "Báo Cáo",
  "Nguyên Liệu Cuộn",
  "Nguyên Liệu Băng",
  "Phụ Liệu",
  "Thành Phẩm Thép",
  "Phế Liệu",
  "Sơ Đồ",
].map((key) => ({
  key,
  label: ` ${key} `,
}));

const items2 = ["Quy trình cuộn", "Quy trình băng", "Quy trình thép"];

items2.push(<ReloadOutlined key="notification" />);

const menuItems = items2.map((key) => ({
  key,
  label:
    key === "" ? (
      <span>
        {key} <ReloadOutlined />
      </span>
    ) : (
      key
    ),
}));

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Header className="Header" style={{background:'#1677FF'}}>
          {/* <div className="logo" /> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["Hệ Thống"]}
            items={items1}
            activeClassName="active-menu-item"
            style={{
              background: "#1677FF",
              color: "white",
              fontSize: "16px",
            }}
          />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["Quy trình cuộn"]}
              defaultOpenKeys={["Quy trình cuộn"]}
              style={{
                fontSize: "16px",
                height: "100%",
                borderRight: 0,
              }}
              items={menuItems} // Chèn biến menuItems vào thành phần Menu
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
              <Breadcrumb.Item>Đơn vị ứng dụng</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <StepByStep />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
