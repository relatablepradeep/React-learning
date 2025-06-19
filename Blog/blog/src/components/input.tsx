import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref} 
        type={type}
        className={`w-full px-3 py-2 border rounded ${className}`} // ✅ Added better styling
        {...props}
      />
    </div>
  );
});

export default Input;
