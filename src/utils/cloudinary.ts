import defaultCloudinary from "cloudinary";

defaultCloudinary.v2.config({
  api_key   : process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME
});

export const cloudinary = defaultCloudinary;