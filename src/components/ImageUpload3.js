import React, { useEffect, useState } from "react";
import axios from "axios";

const unsignedUploadPreset = "zaawjkhe";
const CLOUD_NAME = "drakuseth";
const Curl = "https://api.cloudinary.com/v1_1/drakuseth/image/upload";

export default function ImageUpload3() {
  const [file, setState] = useState(null);

  const getImage = event => {
    setState({ ...file, file: event.target.files[0] });
  };
  const uploadImage = e => {
    const imageFile = file.file;
    console.log(imageFile);
    const url = "https://api.cloudinary.com/v1_1/drakuseth/image/upload";
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
    fd.append("file", imageFile);
    xhr.send(fd);
  };
  return (
    <div className="Main">
      <h1>Upload Image</h1>

      <input type="file" onChange={getImage} />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}
