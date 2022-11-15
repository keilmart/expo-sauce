import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgCrossMark = (props) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m7.955 7.955 20.25 20.25m-20.25 0 20.25-20.25"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SvgCrossMark
