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
import { useEffect, useState } from "react";
import { getOrderByStatus } from "servers/OrderService";

export default function data() {
  const [clients, setClient] = useState([]);
  const [idProduct, setIdProduct] = useState("");
  const [open, setOpen] = useState(false);

  const getProductWatting = async () => {
    const res = await getOrderByStatus(1);
    console.log("cho xac nhan", res);
    setClient(res);
  };

  useEffect(() => {
    try {
      getProductWatting();
    } catch (error) {
      console.error(error);
    }
  }, []);
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography
        sx={{ textOverflow: "ellipsis", maxWidth: "300px", maxHeight: "100px" }}
        variant="button"
        fontWeight="medium"
        ml={1}
        lineHeight={1}
      >
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

  const rows = Array.isArray(clients) // Check if products is an array
    ? clients.map((client, index) => ({
        project: (
          <Project
            name={client.fullname} // replace with the actual property from your product object
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {client.total_amount} {/* replace with the actual property from your product object */}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {client.wards + " " + client.district + " " + client.city}
          </MDTypography>
        ),
        completion: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
            sx={{ textAlign: "left" }}
          >
            {client.distric}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon onClick={() => {}}>pendingIcon</Icon>
          </MDTypography>
        ),
      }))
    : [];

  return {
    columns: [
      { Header: "Tên Khách Hàng", accessor: "project", width: "30%", align: "left" },
      { Header: "Giá trị đơn hàng", accessor: "budget", align: "left" },
      { Header: "Địa chỉ", accessor: "status", align: "center" },
      { Header: "Đang chờ xác nhận", accessor: "action", align: "center" },
    ],

    rows: rows,
  };
}
