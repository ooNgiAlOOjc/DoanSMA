import React from "react";

const variantClasses = {
  h1: "font-extrabold sm:text-[40px] md:text-[46px] text-[54px]",
  h2: "font-extrabold sm:text-4xl md:text-[42px] text-[46px]",
  h3: "font-extrabold text-4xl sm:text-[32px] md:text-[34px]",
  h4: "font-extrabold sm:text-2xl md:text-[26px] text-[28px]",
  h5: "text-2xl md:text-[22px] sm:text-xl",
  h6: "font-bold text-[22px] sm:text-lg md:text-xl",
  body1: "text-xl",
  body2: "font-bold text-[19.25px]",
  body3: "text-lg",
  body4: "text-base",
  body5: "font-normal text-sm",
  body6: "font-semibold text-[12.83px]",
  body7: "font-semibold text-xs",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
