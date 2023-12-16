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
import { useEffect, useState } from "react";
import { getTopAccount } from "servers/OrderService";

export default function data() {
  const [accounts, setAccount] = useState([]);

  const getAllAccount = async () => {
    const res = await getTopAccount();
    setAccount(res);
  };

  useEffect(() => {
    try {
      getAllAccount();
    } catch (error) {
      console.error(error);
    }
  }, []);

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

  const rows = Array.isArray(accounts.content) // Check if products is an array
    ? accounts.content.map((product, index) => ({
        project: <Project image={product.img} name={product.fullname} />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {product.email}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.totalAmount} {/* replace with the actual property from your product object */}
          </MDTypography>
        ),
      }))
    : [];

  return {
    columns: [
      { Header: "Sản phẩm", accessor: "project", width: "30%", align: "left" },
      { Header: "Giá", accessor: "budget", align: "left" },
      { Header: "Tồn kho", accessor: "status", align: "center" },
    ],
    rows: rows,
  };
}
