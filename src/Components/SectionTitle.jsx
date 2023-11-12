const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="pb-10 text-center max-w-xs mx-auto">
      <h3 className="text-yellow-400 font-bold">---{subHeading}---</h3>
      <p className="text-slate-700 text-3xl border-y-4 py-4 mt-2 uppercase">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
