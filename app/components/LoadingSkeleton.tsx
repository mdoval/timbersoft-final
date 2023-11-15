"use client";

import { Watch } from "react-loader-spinner";

export function LoadingSkeleton() {
  return (
    <div className="w-full h-full flex align-middle items-center">
      <Watch
        height="200"
        width="200"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}
