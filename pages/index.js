import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718.59 270.03">
          <path d="M435.82,128q0,9.43.75,41.92h-.75l-18.51-34.37L337.25,0H270V135h0V270h65.34V144.27q0-9.44-.76-44.19h.76l19.26,36.26L433.93,270h67.22V0H435.82Z" />
          <polygon points="578.47 213.38 578.47 155.6 696.68 155.6 696.68 103.48 578.47 103.48 578.47 55.14 716.32 55.14 716.32 0 511.63 0 511.63 270.03 718.59 270.03 718.59 213.38 578.47 213.38" />
          <circle
            cx="135.01"
            cy="135.02"
            r="34.14"
            transform="translate(-12.65 13.96) rotate(-5.65)"
          />
          <path d="M135,0A135,135,0,1,0,270,135,135,135,0,0,0,135,0Zm47.13,182.14c-46.48,46.48-105.25,63.05-131.28,37s-9.45-84.8,37-131.28,105.24-63,131.27-37S228.61,135.66,182.14,182.14Z" />
        </svg>
      </div>
    </div>
  );
}
