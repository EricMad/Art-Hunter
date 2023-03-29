import axios from "axios";
import { useState, useEffect } from "react";
import TableScores from "./TableScores";

function PanelsScores(props) {
  const { value, index } = props;
  const [scores, setScores] = useState([]);
  const [dailyScores, setDailyScores] = useState([]);

  const config = {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/scores/daily`, config)
      .then((response) => {
        setDailyScores(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/scores/global`, config)
      .then((response) => {
        setScores(response.data);
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
        <TableScores scores={scores} />
      ) : (
        <TableScores scores={dailyScores} />
      )}
    </div>
  );
}

export default PanelsScores;
