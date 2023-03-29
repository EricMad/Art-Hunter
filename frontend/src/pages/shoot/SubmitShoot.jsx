import Button from "@mui/material/Button";

function SubmitShoot({ handleButtonShoot, hasPhoto }) {
  return (
    <div>
      <Button
        className="acces-btn"
        variant="contained"
        type="submit"
        onClick={() => {
          handleButtonShoot();
        }}
      >
        {hasPhoto ? "RETRY" : "SHOOT"}
      </Button>
    </div>
  );
}

export default SubmitShoot;
