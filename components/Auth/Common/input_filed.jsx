const InputFiled = ({
  placeholder_name,
  type_name,
  class_name,
  readOnly,
  input_name,
  onChange,
  value,
  maxLength,
  onKeyPress,
  disabled,
  register
}) => {
  return (
    <>
      <input
        type={type_name}
        placeholder={placeholder_name}
        onChange={onChange}
        value={value}
        name={input_name}
        maxLength={maxLength}
        autoComplete="off"
        aria-describedby="emailHelp "
        className={class_name || ""}
        onKeyPress={onKeyPress}
        disabled={disabled}
        readOnly={readOnly}
        {...register}
      />
    </>
  );
};
export default InputFiled;


export function Select({ register, options, name, onChange,id }) {
  return (
    <select {...register} 
    onChange={onChange}
    name={name}
    id={id}
    >
      {options.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}