/* import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react"; */

import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;

/* const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),
  label: `nav ${index + 1}`,
})); */
const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "Admin",
  },
  {
    key: "3",
    label: "User",
  },
  {
    key: "11",
    label: "More Item",
    children: [
      {
        key: "12",
        label: "Dashboard",
      },
      {
        key: "13",
        label: "Admin",
      },
      {
        key: "14",
        label: "User",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              color: "white",
              textAlign: "center",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <h1 style={{ height: 20 }}>PH University </h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1>Here is the main content </h1>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
