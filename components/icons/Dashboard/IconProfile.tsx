import * as React from "react";

function IconProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="md:translate-y-[-5px]"
      viewBox="0 0 16 16"
      fill="currentColor"
      height="30px"
      width="35px"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM13 14H2V2h11v12zM4 9h7v1H4zm0 2h7v1H4zm1-6.5a1.5 1.5 0 113.001.001A1.5 1.5 0 015 4.5zM7.5 6h-2C4.675 6 4 6.45 4 7v1h5V7c0-.55-.675-1-1.5-1z"
      />
    </svg>
  );
}

export default IconProfile;
