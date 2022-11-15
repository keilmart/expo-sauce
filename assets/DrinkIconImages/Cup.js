import * as React from "react";

function Cup(props) {
  return (
    <svg
      className="prefix__svg-icon"
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="none"
        d="M18.693 3.338h-1.35l.323-1.834A.91.91 0 0016.773.44H3.434a.91.91 0 00-.9 1.033l.256 1.865H1.307a.907.907 0 100 1.816H2.99l1.721 13.613a.909.909 0 00.901.795h8.722c.458 0 .845-.34.902-.795l1.72-13.613h1.737a.907.907 0 100-1.816zM15.69 2.255l-.19 1.079H4.623l-.147-1.079H15.69zm-2.155 15.49H6.413L4.826 5.193H15.12l-1.585 12.552z"
      />
    </svg>
  );
}

const MemoCup = React.memo(Cup);
export default MemoCup;
