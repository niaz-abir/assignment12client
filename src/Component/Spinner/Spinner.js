import React from "react";

const Spinner = () => {
  return (
    <div className="mx-auto">
      <h1 className="mb-4 font-bold text-center text-sky-600">ITS COMING</h1>
      <div className="flex items-center justify-center">
        <div
          class="w-36 h-36 rounded-full animate-spin
                    border-8 border-dashed border-sky-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
