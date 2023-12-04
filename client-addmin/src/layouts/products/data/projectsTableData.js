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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import { useEffect, useState } from "react";
import { productGetAll } from "servers/productService";

export default function data() {
  const [products, setProduct] = useState([]);

  const getAllProduct = async () => {
    const res = await productGetAll();
    setProduct(res);
  };

  useEffect(() => {
    try {
      getAllProduct();
    } catch (error) {
      console.error(error);
    }
  }, []);

  // const updateProduct = () => {
  //
  // }

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

  const rows = Array.isArray(products.content) // Check if products is an array
    ? products.content.map((product, index) => ({
        project: (
          <Project
            image={product.img} // replace with the actual property from your product object
            name={product.name_product} // replace with the actual property from your product object
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {product.price} {/* replace with the actual property from your product object */}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.quantity} {/* replace with the actual property from your product object */}
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
            {product.description} {/* replace with the actual property from your product object */}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon onClick={() => {}}>edit</Icon>
            <Icon onClick={() => {}}>delete</Icon>
          </MDTypography>
        ),
      }))
    : [];

  return {
    columns: [
      { Header: "Sản phẩm", accessor: "project", width: "30%", align: "left" },
      { Header: "Giá", accessor: "budget", align: "left" },
      { Header: "Tồn kho", accessor: "status", align: "center" },
      { Header: "Mô tả", accessor: "completion", align: "center" },
      { Header: "Chỉnh sửa", accessor: "action", align: "center" },
    ],
    rows: rows,
  };
}
