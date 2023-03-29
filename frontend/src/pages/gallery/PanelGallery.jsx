import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { authContext } from "../../contexts/AuthContextProvider";
import GlobalGallery from "./GlobalGallery";

function PanelGallery(props) {
  const { value, index } = props;
  const { userToken } = useContext(authContext);
  const [pictures, setPictures] = useState();
  const [picturesById, setPicturesById] = useState();

  const config = {
    headers: {
      accessToken: userToken(),
    },
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/photo/all`, config)
      .then((response) => {
        setPictures(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/photo/you`, config)
      .then((response) => {
        setPicturesById(response.data);
      });
  }, []);

  return (
    <div
      className="panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === 1 ? (
        <GlobalGallery pictures={pictures} />
      ) : (
        <GlobalGallery pictures={picturesById} />
      )}
    </div>
  );
}

export default PanelGallery;
