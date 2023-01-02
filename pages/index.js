import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");

  const storeEmail = (e) => {
    e.preventDefault();
    saveEmail();
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const saveEmail = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer keyQp9VYM2Kdween6");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwjBR3cILxJgdyvM");

    var raw = JSON.stringify({
      fields: {
        Email: email,
        Fullname: fullname
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const res = await fetch(
      "https://api.airtable.com/v0/appeinEkiNldHTryp/Table%201",
      requestOptions
    );

    const data = await res.json();

    if (data) setLoading(false);
    if (data.id.length > 0) setSuccess(true);

    console.log(data);
  };

  return (
    <>
      <Head>
        <title>ONE - Everyone, everywhere, becoming one with God.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid place-items-center h-screen">
        <div className="grid place-items-center space-y-10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 718.59 270.03"
              className="w-40 fill-current text-black"
            >
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

          <div className="text-4xl text-center p-4">
            Everyone, everywhere, becoming one with God.
          </div>

          {!success ? (
            <form onSubmit={storeEmail} className="md:w-1/2 w-3/4">
              <div className="space-y-2">
                <input
                  type="text"
                  required
                  onChange={(e) => setFullname(e.target.value)}
                  className="mt-1 p-6 w-full text-xl block rounded-t-xl bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Fullname"
                />
              </div>

              <div className="space-y-2">
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 border-transparent p-6 w-full text-xl block bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Email"
                />
              </div>

              <div>
                <button className="flex w-full items-center justify-between rounded-b-xl bg-black px-5 pt-4 space-x-3 pb-3 text-white">
                  <div className="capitalize text-xl">Join the movement</div>
                  {loading ? (
                    <svg
                      className="w-5 animate-spin stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 16L19 19M18 12H22M8 8L5 5M16 8L19 5M8 16L5 19M2 12H6M12 2V6M12 18V22"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 stroke-current text-white"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12H21M21 12L14 5M21 12L14 19"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-xl text-green-600">Thank you!</div>
          )}

          <div className="text-black text-xs">&copy; 2023. One Movement</div>
        </div>
      </div>
    </>
  );
}
