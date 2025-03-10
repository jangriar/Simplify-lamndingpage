import Home from "@/components/Home";
import { MAINLAYOUT } from "@/components/Layout/types";

const Page = () => {
  return (
    <>
      <div>
        <div className="h-full w-full">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Page;
Page.Layout = MAINLAYOUT;
