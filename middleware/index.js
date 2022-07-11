
import {expressjwt} from "express-jwt";

// import course from "../models/course";
// import User from "../models/user";

export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: "Secret123",
  algorithms: ["HS256"],
});