import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block"
    {...props}
  >
    <circle cx="136" cy="134" r="127" /> 
    <rect x="44" y="280" rx="18" ry="18" width="181" height="26" /> 
    <rect x="14" y="324" rx="18" ry="18" width="258" height="69" /> 
    <rect x="15" y="418" rx="18" ry="18" width="89" height="28" /> 
    <rect x="162" y="408" rx="30" ry="30" width="108" height="44" />
  </ContentLoader>
)

export default MyLoader
