// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import { useEffect, useState } from "react";
import { getTopProduct } from "servers/OrderService";

import PropTypes from "prop-types";

export default function data() {
  const [products, setProduct] = useState([]);

  const getAllProduct = async () => {
    const res = await getTopProduct();
    setProduct(res);
  };

  useEffect(() => {
    try {
      getAllProduct();
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

  const rows = Array.isArray(products) // Check if products is an array
    ? products.map((product, index) => ({
        id: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.id}
          </MDTypography>
        ),
        product: (
          <Project
            image={product.img} // replace with the actual property from your product object
            name={product.nameProduct} // replace with the actual property from your product object
          />
        ),
        category: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {product.category.name}
          </MDTypography>
        ),
        price: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {product.price}
          </MDTypography>
        ),
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.quantity}
          </MDTypography>
        ),
        totalBuy: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {product.totalBuy}
          </MDTypography>
        ),
      }))
    : [];

  return {
    columns: [
      { Header: "Id", accessor: "id", align: "left" },
      { Header: "Product", accessor: "product", width: "30%", align: "left" },
      { Header: "Category", accessor: "category", align: "left" },
      { Header: "Price", accessor: "price", align: "left" },
      { Header: "Quantity", accessor: "quantity", align: "center" },
      { Header: "Total Buy", accessor: "totalBuy", align: "center" },
    ],
    rows: rows,
  };
}
