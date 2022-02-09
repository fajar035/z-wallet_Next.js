import Public from "./Public";
import Private from "./Private";

function Footer(props) {
  // console.log("LOGIN-FOOTER", props);
  const login = props.login;
  return <>{!login ? <Public /> : <Private />}</>;
}

export default Footer;
