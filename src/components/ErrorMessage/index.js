import React from "react";

export const ErrorMessage = ({ errors = [], className = "" }) => {
  return (
    errors?.length > 0 && (
      <div
        className={`text-red-500 text-left text-1xl w-full ml-5 ${className}`}
      >
        {errors.join(", ")}
      </div>
    )
  );
};
