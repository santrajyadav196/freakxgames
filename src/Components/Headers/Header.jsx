import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import logo from "../../Assets/freak x games logo.png";

const { Header } = Layout;

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            LICENSING
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            REVENUE SHARE
          </a>
        ),
      },
    ]}
  />
);

const HeaderUI = () => {
  return (
    <div className="nav">
      <Layout className="layout">
        <Header style={{ background: "#fff", height: 70 }}>
          <div className="logo">
            <img src={logo} alt="logoBtn" style={{ width: 60, height: 70 }} />
          </div>
          <Menu
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              height: 90,
              fontWeight: 700,
            }}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["4"]}
            items={[
              <div onClick={() => console.log("hello1")}>HOME</div>,
              <div>PORTFOLIO</div>,
              <div>ABOUT US</div>,
              <Dropdown
                overlay={menu}
                placement="bottom"
                // style={{ fontWeight: 700 }}
              >
                <div>PUBLISH OUR GAMES</div>
              </Dropdown>,
              <div>BLOG</div>,
              <div>CAREER</div>,
              <div>CONTACT US</div>,
            ].map((el, index) => {
              const key = index + 1;
              return {
                key,
                label: el,
              };
            })}
          />
        </Header>
      </Layout>
    </div>
  );
};

export default HeaderUI;
