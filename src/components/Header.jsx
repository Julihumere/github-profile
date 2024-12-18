export default function Header(info) {
  let data = info.data;

  return (
    <header className="relative w-full flex items-start justify-start text-center text-2xl mt-5 max-[640px]:justify-between">
      <img
        src={data.avatar_url == "" ? "/github.png" : data?.avatar_url} // Ruta de la imagen
        alt="Github Logo"
        className={`${
          data.avatar_url == "" ? "bg-backgroundItems" : ""
        } border-[14px] lg:border-[14px] md:border-[12px] sm:border-[10px] max-[640px]:border-[8px] border-background transform -translate-y-20 rounded-[32px] lg:rounded-[32px] md:rounded-[28px] sm:rounded-[24px] max-[640px]:rounded-[20px] lg:mr-8 md:mr-6 sm:mr-4 sm:mb-0 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 lg:-translate-y-24 md:-translate-y-20 sm:-translate-y-14 max-[640px]:-translate-y-12`}
      />
      <div className="flex justify-center lg:gap-4 md:gap-3 sm:gap-2 max-[640px]:gap-1">
        <div className="h-10 md:h-12 lg:h-12 max-[640px]:h-7 flex items-center justify-between px-2 bg-backgroundItems rounded-2xl">
          <h3 className="font-beVietnamPro font-medium text-sm text-placeholder py-1 px-2 lg:text-md lg:px-3 md:text-sm sm:text-[10px] max-[640px]:text-[8px] max-[640px]:px-1">
            Followers
          </h3>
          <span className="w-[1px] h-3/4 bg-placeholder"></span>
          <h3 className="font-beVietnamPro font-medium text-sm text-textWhite py-1 px-2 lg:text-md lg:px-3 md:text-sm sm:text-[6px] max-[640px]:text-[8px] max-[640px]:px-1">
            {data.followers == 0 ? "0" : data?.followers}
          </h3>
        </div>
        <div className="h-10 md:h-12 lg:h-12 max-[640px]:h-7 flex items-center justify-between px-2 bg-backgroundItems rounded-2xl">
          <h3 className="font-beVietnamPro font-medium text-sm text-placeholder py-1 px-2 lg:text-md lg:px-3 md:text-sm sm:text-[10px] max-[640px]:text-[8px] max-[640px]:px-1">
            Following
          </h3>
          <span className="w-[1px] h-3/4 bg-placeholder"></span>
          <h3 className="font-beVietnamPro font-medium text-sm text-textWhite py-1 px-2 lg:text-md lg:px-3 md:text-sm sm:text-[6px] max-[640px]:text-[8px] max-[640px]:px-1">
            {data.following == 0 ? "0" : data?.following}
          </h3>
        </div>
        <div className="h-10 md:h-12 lg:h-12 max-[640px]:h-7 flex items-center justify-between px-2 bg-backgroundItems rounded-2xl">
          <h3 className="font-beVietnamPro font-medium text-sm text-placeholder py-1 px-2 lg:text-md lg:px-3 md:text-sm sm:text-[10px] max-[640px]:text-[8px] max-[640px]:px-1">
            Location
          </h3>
          <span className="w-[1px] h-3/4 bg-placeholder"></span>
          <h3 className="font-beVietnamPro font-medium text-sm text-textWhite py-1 px-2 lg:text-md lg:px-3 md:text-sm sm:text-[6px] max-[640px]:text-[8px]">
            {data.location === "" ? "No location" : data?.location}
          </h3>
        </div>
      </div>
    </header>
  );
}
