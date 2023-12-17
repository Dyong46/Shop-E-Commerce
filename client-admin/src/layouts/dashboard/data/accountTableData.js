import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

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

  Project.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
  };

  const rows = Array.isArray(accounts)
    ? accounts.map((product) => ({
        id: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.id}
          </MDTypography>
        ),
        user: <Project image={product.img} name={product.fullname} />,
        email: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {product.email}
          </MDTypography>
        ),
        totalAmount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.totalAmount}
          </MDTypography>
        ),
      }))
    : [];

  return {
    columns: [
      { Header: "ID", accessor: "id", align: "left" },
      { Header: "User", accessor: "user", width: "30%", align: "left" },
      { Header: "Email", accessor: "email", align: "left" },
      { Header: "Tổng tiền", accessor: "totalAmount", align: "center" },
    ],
    rows: rows,
  };
}
