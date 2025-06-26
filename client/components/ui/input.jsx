export function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '8px',
        width: '100%',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }}
    />
  );
}
