import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    JsonWebTokenError.verify(token, process.env.ACCESS_TOKEN_SECRET);
    await User.findById(decodedToken?._id).select(
      "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
    );

    if (!User) {
      throw new ApiError(401, "Invalid access token");
    }
    req.user = usernext();
  } catch (error) {
    throw new ApiError(401, "Invalid token");
  }
});
