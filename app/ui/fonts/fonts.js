import { Barlow, Bellefair } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const bellefair = Bellefair({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
export { barlow, bellefair };
