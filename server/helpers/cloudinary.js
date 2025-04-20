import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";

cloudinary.config({ 
  cloud_name: 'dryhlzadw', 
  api_key: '874134426531479', 
  api_secret: '9mmbs3FPwyUaNhFrod0N_14JQA8' // Click 'View API Keys' above to copy your API secret
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

export { upload, imageUploadUtil };
