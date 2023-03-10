import Frame from "@/components/frame";
import NoticeList from "@/components/notice-list";
import Popup from "@/components/popup";
import PopupBtn from "@/components/popup-btn";
import { ChangeEvent, useState } from "react";

export default function Section1() {
  const [allSelected, setAllSelected] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [isNotice, setIsNotice] = useState(false);
  const [isPrivacyAggree, setIsPrivacyAggree] = useState(false);
  const [isMacketingAggree, setIsMacketingAggree] = useState(false);

  const handleSelectAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(["item1", "item2", "item3"]);
    }
    setAllSelected(!allSelected);
  };

  const onChangeSelected = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    if (e.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((checkedId) => checkedId !== id));
    }
  };
  return (
    <>
      <div className="section">
        <div className="bg-[url('/current/section1/bg.jpg')] bg-cover bg-center absolute top-0 w-full h-screen"></div>
        <Frame
          url="/current/section1/bg_cont_ko.png"
          width="1159"
          height="859"
          charUrl="/current/section1/char.png"
          charWidth="1097"
          charHeight="1414"
          charPos="-640"
          charFront={false}
        >
          <div className="absolute top-[165px] right-[120px] w-[405px] space-y-7">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <input
                  className="mr-2 circle-input"
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
                  className="mr-2 circle-input"
                  type="radio"
                  name="phone_os"
                  id="ios"
                />
                <label htmlFor="ios" className="text-xl">
                  IOS
                </label>
              </div>
              <PopupBtn
                text="????????????"
                handleOpen={() => {
                  setIsNotice(true);
                }}
              />
            </div>
            <div className="space-y-4">
              <div className="relative">
                <input
                  className="w-full border-2 border-input-gray py-3 pl-16 rounded-xl text-xl text-black"
                  placeholder="'-'??? ???????????? ????????? ????????? ?????????."
                />
                <div className="absolute top-3.5 left-5 text-xl">010</div>
              </div>
              <button className="w-full border border-blue-600 text-white bg-blue-500 text-xl py-3 rounded-xl">
                ???????????? ??????
              </button>
            </div>
            <div className="flex items-center space-x-2.5">
              <input
                id="all-agree-checkbox"
                className="circle-input"
                type={"checkbox"}
                onChange={handleSelectAll}
                checked={selected.length === 3 ? true : false}
              />
              <label htmlFor="all-agree-checkbox" className="text-xl">
                ?????? ????????? ??????????????????, ?????? ???????????????.
              </label>
            </div>
            <div className="space-y-2">
              <div className="space-x-2 flex items-center">
                <input
                  id="fourteen-over"
                  className="square-checkbox"
                  type={"checkbox"}
                  checked={selected.includes("item1")}
                  onChange={(e) => {
                    onChangeSelected(e, "item1");
                  }}
                />
                <label
                  htmlFor="fourteen-over"
                  className="text-sm text-gray-600"
                >
                  ??? 14??? ???????????????.
                </label>
              </div>
              <div className="space-x-2 flex items-center">
                <input
                  id="privacy-aggree"
                  className="square-checkbox"
                  type={"checkbox"}
                  checked={selected.includes("item2")}
                  onChange={(e) => {
                    onChangeSelected(e, "item2");
                  }}
                />
                <label
                  htmlFor="privacy-aggree"
                  className="text-sm text-gray-600"
                >
                  ???????????? ?????? ??? ?????? ??????
                </label>
                <PopupBtn
                  text="????????? ??????"
                  handleOpen={() => {
                    setIsPrivacyAggree(true);
                  }}
                />
              </div>
              <div className="space-x-2 flex items-center">
                <input
                  id="macketing-aggree"
                  className="square-checkbox"
                  type={"checkbox"}
                  checked={selected.includes("item3")}
                  onChange={(e) => {
                    onChangeSelected(e, "item3");
                  }}
                />
                <label
                  htmlFor="macketing-aggree"
                  className="text-sm text-gray-600"
                >
                  ??????????????? ?????? ????????? ?????? ??????
                </label>
                <PopupBtn
                  text="????????? ??????"
                  handleOpen={() => {
                    setIsMacketingAggree(true);
                  }}
                />
              </div>
            </div>
            <button className="bg-[url('/current/section1/btn_reg.png')] w-[404px] h-[80px]"></button>
          </div>
          <div className="absolute bottom-[100px] left-[215px] grid grid-cols-3 gap-1.5">
            <a
              className="w-[115px] h-[40px]"
              href="https://play.google.com/store/apps/details?id=com.nexon.bluearchive"
            ></a>

            <a
              className="w-[115px] h-[40px]"
              href="https://apps.apple.com/kr/app/id1571873795"
            ></a>

            <a
              className="w-[115px] h-[40px]"
              href="https://onesto.re/0000758646"
            ></a>
          </div>
        </Frame>
      </div>
      <Popup
        handleClose={() => {
          setIsNotice(false);
        }}
        isOpen={isNotice}
      >
        <div className="border bg-white py-5 px-5 rounded flex flex-col items-center max-w-[52rem]">
          <h2 className="text-2xl font-bold text-black">????????????</h2>
          <div className="my-6">
            <NoticeList text="???????????? ????????? ?????? ??? 1??? ?????? ????????????, 2023??? 1??? 31???(???) ???????????? ??? ~ 2023??? 3??? 9???(???) ?????? 11??? 59????????? ????????? ?????? ??? ??????????????? ???????????????." />
            <NoticeList text="????????? ????????? ???????????? ????????? ?????? ??? 1??? ?????? ????????????, 2023??? 1??? 31???(???) ???????????? ?????? ??????????????? ????????? ???????????????. ?????? ????????? ?????? ????????? ?????? ?????? ?????? ????????????." />
            <NoticeList text="????????? ?????? ?????? ??? ????????? ??????????????? ?????? ?????? ??? ??? ????????????." />
            <NoticeList text="???????????? ?????? ?????? ????????? ????????? ?????? ???????????? ??? ???????????? ????????? ????????? ?????? ?????? ?????? ????????????." />
            <NoticeList text="???????????? ?????????????????? ????????????????????? ???????????? ?????? ?????? ??? ???????????? ????????????, ????????????, ????????? ?????? ??? ????????? ?????? ????????? ?????? ??? ????????????." />
            <NoticeList text="?????? ?????? ?????? ?????? ????????? ????????? ??????, [??????????????????]-[????????????]-[???????????????]-[?????? ????????????] ?????? ??? ?????????????????? ????????????." />
            <NoticeList text="???????????? ?????? ?????? ?????? ?????? ????????? ?????? ?????? ????????? ??????????????? ?????? ????????? ?????? ?????? ??? ?????????, ??? ?????? ?????? ?????? ????????? ?????????????????? ????????????." />
            <NoticeList text="????????? ???????????? ????????? ???????????? ????????? ?????? ?????? ?????? ????????? ?????? ??? ?????????, ????????? ???????????? ????????? ?????????????????? ????????????." />
            <NoticeList text="????????? ???????????? ????????? ????????? ?????? ????????? ????????? ????????? ??? ????????????." />
            <NoticeList text="????????? ?????? ???????????? ??? ?????? ?????? ?????? ?????? ????????? ??????????????? ??????, ?????? ???????????? ???????????????." />
          </div>
          <button
            onClick={() => {
              setIsNotice(false);
            }}
            className="border-2 py-2 px-9 border-black font-bold text-lg"
          >
            ??????
          </button>
        </div>
      </Popup>
      <Popup
        isOpen={isPrivacyAggree}
        handleClose={() => {
          setIsPrivacyAggree(false);
        }}
      >
        <div className="border bg-white py-5 px-5 rounded space-y-4 max-w-[36rem]">
          <div>
            <h2 className="text-2xl text-center mb-5 font-bold text-black">
              ???????????? ?????? ??? ?????? ??????
            </h2>
            <span>
              (???)?????????????????? ????????? ?????? ??????????????? ?????? ??? ???????????? ????????????.
            </span>
            <table className="border-collapse my-4 w-full">
              <tbody>
                <tr>
                  <th className="border bg-gray-200 border-black px-2 py-2">
                    ?????? ??? ?????? ??????
                  </th>
                  <td className="border border-black px-2 py-2 text-lg font-bold">
                    ????????? ??? ???????????? ?????? ??????
                  </td>
                </tr>
                <tr>
                  <th className="border bg-gray-200 border-black px-2 py-2">
                    ??????
                  </th>
                  <td className="border border-black px-2 py-2">????????? ??????</td>
                </tr>
                <tr>
                  <th className="border bg-gray-200 border-black px-2 py-2">
                    ?????? ??? ????????????
                  </th>
                  <td className="border border-black px-2 py-2 text-lg font-bold">
                    ?????????????????? 1???
                  </td>
                </tr>
              </tbody>
            </table>
            <NoticeList text="????????? ????????? ?????? ??????????????? ????????? ?????????." />
          </div>
          <div className="border-t-2">
            <h2 className="text-2xl my-5 font-bold text-center text-black">
              ???????????? ?????? ??? ?????? ??????
            </h2>
            <span>
              (???)?????????????????? ????????? ?????? ??????????????? ???????????? ????????????.
            </span>
            <table className="w-full border-collapse table-fixed text-center my-4">
              <tr>
                <th className="border border-black py-2 bg-gray-200">
                  ????????????
                </th>
                <th className="border border-black py-2 bg-gray-200">
                  ?????? ??????
                </th>
              </tr>
              <tr>
                <td className="border border-black py-2">(???)??????????????????</td>
                <td className="border border-black py-2">????????????</td>
              </tr>
              <tr>
                <td className="border border-black py-2">(???)????????????</td>
                <td className="border border-black py-2">
                  ????????? ??? ???????????? ?????? ??????
                </td>
              </tr>
            </table>
            <NoticeList text="??? ?????? ?????? ??? ?????? ?????? ????????? ????????? ????????? ??????????????????????????? ????????????." />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setIsPrivacyAggree(false);
              }}
              className="border-2 py-2 px-9 border-black font-bold text-lg"
            >
              ??????
            </button>
          </div>
        </div>
      </Popup>
      <Popup
        isOpen={isMacketingAggree}
        handleClose={() => {
          setIsMacketingAggree(false);
        }}
      >
        <div className="border bg-white py-5 px-5 rounded space-y-6 max-w-[32rem] flex flex-col items-center">
          <h2 className="text-2xl font-bold text-black">
            ??????????????? ?????? ????????? ?????? ??????
          </h2>
          <div className="text-center text-lg font-bold">
            ????????????????????? ???????????? ?????? ?????? ???????????? ????????????, ????????????,
            ????????? ?????? ??? ????????? ?????? ????????? ?????? ??? ????????????.
          </div>
          <button
            onClick={() => {
              setIsMacketingAggree(false);
            }}
            className="border-2 py-2 px-9 border-black font-bold text-lg"
          >
            ??????
          </button>
        </div>
      </Popup>
    </>
  );
}
