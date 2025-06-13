const Button = ({ title, onClick, customStyles }) => {
  return (
    <button style={{ ...baseButtonStyles, ...customStyles }} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

const baseButtonStyles = {
  width: "160px",
  height: "40px",
  backgroundColor: "#f4ce14",
  color: "#000",
  border: "none",
  borderRadius: "24px",
  fontSize: "16px",
  fontWeight: "500",
};
