export default function LanguageIcon({ icon = "react", color = "#0dcaf0"}) {
  return (
      <div className="text-center">
        <box-icon
            name={icon}
            type="logo"
            color={color}
            size="100px"
        ></box-icon>
      </div>
  )
}
