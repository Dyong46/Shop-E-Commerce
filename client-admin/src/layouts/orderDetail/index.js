/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

j=======================================r=================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

import { productGetAll, updateProduct } from "servers/productService";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { styled } from "@mui/material/styles";

// Data
import { Icon, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getOrderById } from "servers/OrderService.js";
import MDProgress from "components/MDProgress/index.js";
import MDAvatar from "components/MDAvatar/index.js";
import { useState, useEffect } from "react";

function OrderDetail() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  const getOrderDetail = async (id) => {
    try {
      const res = await getOrderById(id);
      console.log(res);
      setOrder(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      getOrderDetail(orderId);
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log("halsjdhfkajshdfkjhaksdhkfhjdf", order);

  const Project = (image, name) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = (color, value) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  const rows = order?.orderDetails
    ? order.orderDetails.map((product, index) => ({
        project: (
          <Project
            image={product.product_id.img} // replace with the actual property from your product object
            name={product.product_id.name_product} // replace with the actual property from your product object
          />
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {product.product_id.price}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.quantity}
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
            <Icon onClick={() => handleEdit(product.id)}>edit</Icon>
            <Icon onClick={() => remove(product.id)}>delete</Icon>
          </MDTypography>
        ),
      }))
    : [];

  const columns = [
    { Header: "Sản phẩm", accessor: "project", width: "30%", align: "left" },
    { Header: "Số lượng", accessor: "status", align: "center" },
    { Header: "Giá", accessor: "budget", align: "left" },
    { Header: "Mô tả", accessor: "completion", align: "center" },
    { Header: "Chỉnh sửa", accessor: "action", align: "center" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid>
          <Stack>
            <Grid item xs={12}>
              <Card>
                <MDBox pt={3}>
                  {order?.orderDetails && (
                    <DataTable
                      table={{ columns: columns, rows: rows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  )}
                </MDBox>
              </Card>
            </Grid>
          </Stack>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderDetail;
