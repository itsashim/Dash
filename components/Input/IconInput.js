const IconInput = ({ icon: Icon, ...rest }) => {
  return (
    <div className="relative  w-1/2">
      <Icon className="absolute left-2 top-2 font-thin" />
      <input
        type="text"
        className="bg-white outline-0 border-0 text-black round-lg"
        placeholder="Search"
        {...rest}
      />
    </div>
  );
};
export default IconInput;
