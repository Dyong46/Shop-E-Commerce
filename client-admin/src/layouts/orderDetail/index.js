// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import { Icon } from "@mui/material";
import { useParams } from "react-router-dom";
import { getOrderById } from "servers/OrderService.js";
import MDAvatar from "components/MDAvatar/index.js";
import { useState, useEffect } from "react";

import PropTypes from "prop-types";

function OrderDetail() {
  const { orderId } = useParams();
  const [test, setTest] = useState(null);

  const getOrderDetail = async (id) => {
    try {
      const res = await getOrderById(id);
      console.log("res: ", res);
      setTest(res);
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

  const Product = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  Product.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
  };

  const rows = Array.isArray(test?.orderDetails)
    ? test.orderDetails.map((orderDetail, index) => ({
        product: (
          <Product image={orderDetail.product_id.img} name={orderDetail.product_id.name_product} />
        ),
        quantity: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {orderDetail.quantity}
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {orderDetail.product_id.price}
          </MDTypography>
        ),
        desc: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {orderDetail.product_id.description}
          </MDTypography>
        ),
      }))
    : [];

  const columns = [
    { Header: "Sản phẩm", accessor: "product", width: "30%", align: "left" },
    { Header: "Số lượng", accessor: "quantity", width: "30%", align: "center" },
    { Header: "Giá", accessor: "price", align: "left" },
    { Header: "Mô tả", accessor: "desc", align: "left" },
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
                  <DataTable
                    table={{ columns: columns, rows: rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Stack>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default OrderDetail;
