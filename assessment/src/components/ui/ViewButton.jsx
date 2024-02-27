export default function ViewButton({ name }) {
  return (
    <button className="w-[95%] lg:mt-8 sm:mt-5 mt-3 sm:p-0 py-2 px-3 outline-none lg:rounded-2xl rounded-lg bg-[#1B88F4] text-white lg:text-base sm:text-sm text-xs sm:h-[48px] h-25px hover:scale-95 hover:shadow-[0_0_7px_1px_#cecece] ">
      {name}
    </button>
  );
}
