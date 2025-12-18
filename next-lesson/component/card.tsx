
export default function Card({ children }: { children: React.ReactNode }) {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={cardStyle}>{children}</div>;
}
