const Bank = ({ imgLogo, title }) => {
  return (
    <div className="w-[120px] h-[110px] rounded-xl shadow-xl flex flex-col items-center justify-center border border-[#D6E6E9] hover:bg-slate-200">
      {imgLogo && <img src={imgLogo} alt="Bank" />}
      {title && (
        <span className="font-semibold text-base text-[#2F2F31] mt-2">
          {title}
        </span>
      )}
    </div>
  );
};

export default Bank;
