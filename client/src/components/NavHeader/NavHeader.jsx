import Popover from '../Popover';

const NavHeader = () => {
  return (
    <div className="flex justify-end">
      <Popover
        className="flex cursor-pointer items-center py-1 hover:text-white/70"
        renderPopover={
          <div className="relative rounded-sm border border-gray-200 bg-white shadow-md">
            <div className="flex flex-col py-2 pr-28 pl-3">
              <button className="py-2 px-3 text-left hover:text-orange" onClick={''}>
                Tiếng Việt
              </button>
              <button className="mt-2 py-2 px-3 text-left hover:text-orange" onClick={''}>
                English
              </button>
            </div>
          </div>
        }
      ></Popover>
    </div>
  );
};

export default NavHeader;
