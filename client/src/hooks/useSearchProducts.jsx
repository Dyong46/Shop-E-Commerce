import { useForm } from "react-hook-form";
import { schema } from "~/utils/rules";
import useQueryConfig from "./useQueryConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSearchParams, useNavigate } from "react-router-dom";
import { omit } from "lodash";
import path from "~/constants/path";

const nameSchema = schema.pick(['name'])

const UseSearchProducts = () => {
  const queryConfig = useQueryConfig()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })
  const navigate = useNavigate()
  const onSubmitSearch = handleSubmit((data) => {
    console.log(data);
    const config = queryConfig.order
      ? omit(
        {
          ...queryConfig,
          name: data.name
        },
        ['order', 'sort_by']
      )
      : {
        ...queryConfig,
        name: data.name
      }
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return { onSubmitSearch, register }
}

export default UseSearchProducts;
