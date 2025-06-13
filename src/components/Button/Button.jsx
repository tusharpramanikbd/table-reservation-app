const Button = ({ title, onClick, customStyles }) => {
  return (
    <button style={{ ...buttonStyles, ...customStyles }} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

const buttonStyles = {
  width: "160px",
  height: "40px",
  backgroundColor: "#f4ce14",
  color: "#000",
  border: "none",
  borderRadius: "24px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "500",
  textDecoration: "none",
  marginTop: "16px",
};
