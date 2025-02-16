import localFont from "next/font/local";

export const anka_coder = localFont({
  src: [
    {
      path: "../../public/fonts/AnkaCoder-r.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/AnkaCoder-b.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/AnkaCoder-i.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/AnkaCoder-bi.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});
