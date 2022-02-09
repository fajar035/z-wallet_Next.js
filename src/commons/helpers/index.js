import cookie from "cookie";

function parseCookies(res) {
  return cookie.parse(res ? res.headers.cookie || "" : document.cookie);
}

export default parseCookies;
