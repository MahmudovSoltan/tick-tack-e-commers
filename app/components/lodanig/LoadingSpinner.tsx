import React from 'react'
import { GridLoader } from 'react-spinners'

const LoadingSpinner = () => {
  return (
    <div style={wrapperStyle}>
      <div style={boxStyle}>
        <GridLoader color="#2f675d" size={15} margin={2} />
        <p style={textStyle}>Yüklənir...</p>
      </div>
    </div>
  )
}

// ✅ Stiller ayrıca saxlanılıb
const wrapperStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#f3f4f6", // açıq boz fonda daha təmiz görünür
}

const boxStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  backgroundColor: "#ffffff",
}

const textStyle: React.CSSProperties = {
  marginTop: "1rem",
  fontSize: "1rem",
  color: "#2f675d",
  fontWeight: 500,
  fontFamily: "sans-serif",
}

export default LoadingSpinner
