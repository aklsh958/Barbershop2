export function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px 0'
    }}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}