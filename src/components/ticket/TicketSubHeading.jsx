import cloudIcon from "../../assets/cloud-download.svg";
import SubHeading from "./SubHeading";

import classes from "./TicketSubHeading.module.css";

export default function TicketSubHeading({
  pageNum,
  onFile,
  onDrop,
  onDrag,
  onFileUpload,
}) {
  if (pageNum === 1) {
    return <SubHeading />;
  }
  if (pageNum === 2) {
    return (
      <div className={classes.photo}>
        <p>Upload Profile Photo</p>
        <div>
          <div className={classes.photo_upload}>
            <input
              type="file"
              name="photo"
              id="file_upload"
              onChange={onFileUpload}
            />
            <label
              htmlFor="file_upload"
              className={classes.file}
              onDrop={onDrop}
              onDragOver={onDrag}
            >
              <img src={cloudIcon} alt="cloud download icon" />
              <p>Drag and drop or click to upload</p>
            </label>
            {onFile && (
              <img
                src={URL.createObjectURL(onFile)}
                alt="user uploaded photo"
                className={classes.photo_preload}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
