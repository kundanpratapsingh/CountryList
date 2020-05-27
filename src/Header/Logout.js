import { logout } from "../actions/logout";
import { useDispatch } from "react-redux";

export default function Logout(props) {
  const dispatch = useDispatch();
  props.history.push("/");
  dispatch(logout());
  return null;
}
