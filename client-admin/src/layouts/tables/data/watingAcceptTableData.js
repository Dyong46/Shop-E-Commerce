/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Sản phẩm", accessor: "project", width: "30%", align: "left" },
      { Header: "Giá", accessor: "budget", align: "left" },
      { Header: "Tồn kho", accessor: "status", align: "center" },
      { Header: "Phổ biến", accessor: "completion", align: "center" },
      { Header: "Chỉnh sửa", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: (
          <Project
            image="https://down-vn.img.susercontent.com/file/ed7a7ed84c137af454c39e8999cdc11f"
            name="Giày_Jordan"
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            đ9500000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23
          </MDTypography>
        ),
        completion: <Progress color="success" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <Project
            image="https://down-vn.img.susercontent.com/file/sg-11134201-23010-exq71yxtktlvf8"
            name="Áo khoác nam MIKENCO Fancy varsity"
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            đ13000000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            12
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <Project
            image="https://down-vn.img.susercontent.com/file/ed7a7ed84c137af454c39e8999cdc11f"
            name="Giày_Jordan"
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            đ9500000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23
          </MDTypography>
        ),
        completion: <Progress color="success" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <Project
            timage="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lijy4lg57geq27"
            name="Áo Baby Tee"
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            đ100000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <Project
            image="https://down-vn.img.susercontent.com/file/sg-11134201-7qvg8-lg0m4pbe0u801e"
            name="Đệm Ngồi Bệt"
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            đ8500000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            30
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <Project
            timage="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lijy4lg57geq27"
            name="Áo Baby Tee"
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            đ100000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: (
          <Project
            image="https://down-vn.img.susercontent.com/file/4c312f44880fc1866ba97f9590bcb2d4"
            name="Gấu Bông MINISO We Bare Bears"
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            đ130000
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            44
          </MDTypography>
        ),
        completion: <Progress color="error" value={10} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
