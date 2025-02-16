import { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

import TicketDetail from "./TicketDetail";
import TicketHeading from "./TicketHeading";

import classes from "./Ticket.module.css";
import TicketBook from "./TicketBook";

export default function Ticket() {
  const savedFormData = localStorage.getItem("formData");
  const initialState = savedFormData
    ? JSON.parse(savedFormData)
    : {
        ticket_type: "regular",
        number: "1",
        name: "",
        email: "",
        request: "",
      };
  const [pageNum, setPageNum] = useState(1);
  const [enteredValues, setEnteredValues] = useState(initialState);

  const [selectedFile, setSelectedFile] = useState(null);
  const [isTouch, setIsTouch] = useState({
    name: false,
    email: false,
    request: false,
  });

  //Using cloudinary to save images
  useEffect(() => {
    if (selectedFile) {
      // const cld = new Cloudinary({ cloud: { cloudName: "dz4mm7kiy" } });
      // const myImage = cld.image(isTouch);
      // const cloudImage = () => <AdvancedImage cldImg={myImage} />;
      // console.log(cloudImage);
      uploadImageCloudinary(selectedFile);
    }
  }, [selectedFile]);

  //ticket-generator
  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  };

  //Handle file upload with click
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  //Handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  //Prevent default browser behavior
  const handleDrapOver = (event) => {
    event.preventDefault();
  };

  //Load save data from browser
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setEnteredValues(JSON.parse(savedData));
    }
  }, []);

  //Save data to browser
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(enteredValues));
  }, [enteredValues]);

  //Reset our fome input
  const handleReset = () => {
    setEnteredValues({
      ticket_type: "regular",
      number: "1",
      name: "",
      email: "",
      request: "",
    });
    setPageNum(1);
    setIsTouch(false);
  };

  //Shows error is loose focus
  const inputBlurHandler = (identifier, value) => {
    setIsTouch((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
  };

  const handleIncreasePageNum = () => {
    setPageNum((prevValue) => (prevValue += 1));
  };
  const handleDecreasePageNum = () => {
    setPageNum((prevValue) => (prevValue -= 1));
  };

  async function uploadImageCloudinary(imageUrl) {
    console.log(imageUrl);
    const payLoad = {
      file: imageUrl,
      upload_preset: "ticket-generator",
    };
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dz4mm7kiy/image/upload`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payLoad),
        }
      );
      const data = await response.json();
      console.log("upload image url:", data.secure_url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <section className={classes.ticket}>
        <TicketHeading pageNum={pageNum} />
        {pageNum < 3 && (
          <TicketDetail
            pageNum={pageNum}
            onChange={handleInputChange}
            onFileUpload={handleFileUpload}
            onFile={selectedFile}
            onDrop={handleDrop}
            onDrag={handleDrapOver}
            onReset={handleReset}
            enteredValues={enteredValues}
            increase={handleIncreasePageNum}
            decrease={handleDecreasePageNum}
            onBlur={inputBlurHandler}
            isTouch={isTouch}
          />
        )}
        {pageNum === 3 && (
          <TicketBook
            onFile={selectedFile}
            enteredValues={enteredValues}
            pageNum={pageNum}
            onReset={handleReset}
          />
        )}
      </section>
    </div>
  );
}
