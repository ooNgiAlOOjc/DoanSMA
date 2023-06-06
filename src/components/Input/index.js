import { ErrorMessage } from "../../components/ErrorMessage"
import PropTypes from "prop-types"
import React from "react"

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      ...restProps
    },
    ref
  ) => {
    const handleChange = e => {
      if (onChange) onChange(e?.target?.value)
    }

    return (
      <>
        <div className={`${wrapClassName}`}>
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className}`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    )
  }
)

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
}

export { Input }
