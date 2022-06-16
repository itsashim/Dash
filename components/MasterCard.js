const MasterCard = ({
  cardType,
  cardNumber = "000 000 000 000",
  cardHolder,
  cardBank,
  cardBrand,
  cardIcon:CardIcon,
}) => {
  return (
    <div className="w-full font-openSancs shadow-card h-44 gradient rounded-lg  p-4">
      <p className="font-extrabold font-openSans text-white text-xs pt-5">
        {cardType}
      </p>
      <p className="font-thin subpixel-antialiased font-openSans text-white text-xl">
        {cardNumber}
      </p>
      <div className="flex felx-row justify-between pt-5 items-end ">
        <div className="flex flex-col font-openSans  justify-start">
          <p className="font-bold font-openSans text-white  ">
            {cardHolder}
          </p>
          <p className="font-bold font-openSans text-white pb-1 text-xs">
            {cardBank}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CardIcon size={30} className="text-white opacity-60" />
          <p className="font-bold font-openSans text-white  text-lg">
           {cardBrand}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MasterCard