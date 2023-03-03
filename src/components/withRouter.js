import { useActionData, useLocation, useNavigate, useNavigation, useNavigationType, useParams, useSearchParams } from "react-router-dom";

const withRouter = (Comp) => (props)=> {
  const navigate = useNavigate();
  const params = useParams()
  const searchParams = useSearchParams()
  const location = useLocation()
return <Comp {...props} router={{
  navigate,
  params,
  searchParams,
  location
}}/>};
export default withRouter;