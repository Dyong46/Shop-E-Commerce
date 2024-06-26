// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import PropTypes from "prop-types";

// Images
import { useEffect, useState } from "react";
import { getOrderByStatus } from "servers/OrderService";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import { getAddress } from "utils/utils";
import { getNameFromNameId } from "utils/utils";
import { formatCurrency } from "utils/utils";

export default function data() {
  const [clients, setClient] = useState([]);
  const moment = require("moment");

  const getProductCancel = async () => {
    const res = await getOrderByStatus(4);
    console.log("cho xac nhan", res);
    setClient(res);
  };

  useEffect(() => {
    try {
      getProductCancel();
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

  Project.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
  };
  console.log("clients: ", clients);
  const rows = Array.isArray(clients) // Check if products is an array
    ? clients.map((client, index) => ({
        project: (
          <MDButton>
            <Link to={`/orders/${client.id}`}>
              <Project
                name={client.fullname} // replace with the actual property from your product object
              />
            </Link>
          </MDButton>
        ),
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {formatCurrency(client.total_amount)}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {getNameFromNameId(client.wards) +
              ", " +
              getNameFromNameId(client?.district) +
              ", " +
              getNameFromNameId(client?.city)}
          </MDTypography>
        ),
        dateCreate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {moment(new Date(client.created_at).toString()).format("DD/MM/YYYY")}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon onClick={() => {}}>cancel</Icon>
          </MDTypography>
        ),
      }))
    : [];

  return {
    columns: [
      { Header: "Tên Khách Hàng", accessor: "project", width: "30%", align: "left" },
      { Header: "Giá trị đơn hàng", accessor: "budget", align: "left" },
      { Header: "Địa chỉ", accessor: "status", align: "center" },
      { Header: "Ngày tạo", accessor: "dateCreate", align: "center" },
      { Header: "Đơn huỷ", accessor: "action", align: "center" },
    ],
    rows: rows,
    getProductCancel,
  };
}
