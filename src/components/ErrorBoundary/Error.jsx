import { classNames } from "@/utils/classNames";
import Image from "next/image";

export default function Error({ title, subTitle, butonText, onClick }) {
  return (
    <div className={classNames("flex flex-col items-center justify-center")}>
      <Image src="/assets/error.svg" alt="404" width={200} height={200} />
      <h1 className="text-[40px] text-secondary-200 mb-2">{title}</h1>
      <p className="text-sm m-0 mb-8 text-secondary-300">{subTitle}</p>
      <div>
        <button className="primary-submit-btn" onClick={onClick}>
          {butonText}
        </button>
      </div>
    </div>
  );
}
