const makeBadge = (label: string) => {
  switch (label) {
    case 'label1':
      return (
        <div className="w-[50px] h-[30px] text-white rounded-md flex items-center justify-center bg-slate-400">
          {label}
        </div>
      );
    case 'label2':
      return (
        <div className="w-[50px] h-[30px] text-white rounded-md flex items-center justify-center bg-slate-500">
          {label}
        </div>
      );
    case 'label3':
      return (
        <div className="w-[50px] h-[30px] text-white rounded-md flex items-center justify-center bg-slate-700">
          {label}
        </div>
      );
    case 'label4':
      return (
        <div className="w-[50px] h-[30px] text-white rounded-md flex items-center justify-center bg-slate-900">
          {label}
        </div>
      );
    default:
      return null;
  }
};

export default makeBadge;
