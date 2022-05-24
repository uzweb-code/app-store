import { ComponentProps } from "react";
export function StorageIcon({ ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
    >
      <path
        fill="#2626c7"
        fill-rule="nonzero"
        d="M4.674.044v4.208a.467.467 0 0 1-.467.467H0A4.235 4.235 0 1 0 4.674.044zm-.93 0A4.235 4.235 0 0 0 0 3.788h3.743V.044z"
      />
    </svg>
  );
}
export function AppStoreIcon({ ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 800 800"
      enableBackground="new 0 0 800 800"
      xmlSpace="preserve"
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="400.05"
        y1="798.7717"
        x2="400.05"
        y2="-1.2283"
        gradientTransform="matrix(1 0 0 -1 0 798.7717)"
      >
        #2072F3
        <stop offset="0" style={{ stopColor: "#18BFFB" }} />
        <stop offset="1" style={{ stopColor: "#2072F3" }} />
      </linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M638.4,0H161.6C72.3,0,0,72.3,0,161.6v476.9C0,727.7,72.3,800,161.6,800h476.9  c89.2,0,161.6-72.3,161.6-161.6V161.6C800,72.3,727.7,0,638.4,0z"
      />
      <path
        fill="#FFFFFF"
        d="M396.6,183.8l16.2-28c10-17.5,32.3-23.4,49.8-13.4s23.4,32.3,13.4,49.8L319.9,462.4h112.9  c36.6,0,57.1,43,41.2,72.8H143c-20.2,0-36.4-16.2-36.4-36.4c0-20.2,16.2-36.4,36.4-36.4h92.8l118.8-205.9l-37.1-64.4  c-10-17.5-4.1-39.6,13.4-49.8c17.5-10,39.6-4.1,49.8,13.4L396.6,183.8L396.6,183.8z M256.2,572.7l-35,60.7  c-10,17.5-32.3,23.4-49.8,13.4S148,614.5,158,597l26-45C213.4,542.9,237.3,549.9,256.2,572.7L256.2,572.7z M557.6,462.6h94.7  c20.2,0,36.4,16.2,36.4,36.4c0,20.2-16.2,36.4-36.4,36.4h-52.6l35.5,61.6c10,17.5,4.1,39.6-13.4,49.8c-17.5,10-39.6,4.1-49.8-13.4  c-59.8-103.7-104.7-181.3-134.5-233c-30.5-52.6-8.7-105.4,12.8-123.3C474.2,318.1,509.9,380,557.6,462.6L557.6,462.6z"
      />
    </svg>
  );
}
