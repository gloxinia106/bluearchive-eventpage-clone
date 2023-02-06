import PopupBtn from "@/components/popup-btn";

export default function Section1() {
  return (
    <div className="section">
      <div className="bg-[url('/current/section1/bg.jpg')] bg-cover bg-center absolute top-0 w-full h-screen"></div>
      <div className="z-30 w-full h-full absolute top-0 overflow-hidden">
        <div className="bg-[url('/current/section1/bg_cont_ko.png')] mx-auto w-[1159px] h-[859px] relative">
          <div className="bg-[url('/current/section1/char.png')] absolute w-[1097px] h-[1414px] -top-[120px] -right-[640px] -z-10 "></div>
          <div className="absolute top-[165px] right-[120px] w-[405px]">
            <div>
              <div className="flex items-center space-x-5">
                <div className="flex items-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="phone_os"
                    id="android"
                  />
                  <label htmlFor="android" className="text-xl">
                    AOS
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="mr-2"
                    type="radio"
                    name="phone_os"
                    id="ios"
                  />
                  <label htmlFor="ios" className="text-xl">
                    IOS
                  </label>
                </div>
                <PopupBtn text="유의사항" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
