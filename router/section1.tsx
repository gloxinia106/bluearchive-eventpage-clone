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
                text="유의사항"
                handleOpen={() => {
                  setIsNotice(true);
                }}
              />
            </div>
            <div className="space-y-4">
              <div className="relative">
                <input
                  className="w-full border-2 border-input-gray py-3 pl-16 rounded-xl text-xl text-black"
                  placeholder="'-'을 제외하고 숫자만 입력해 주세요."
                />
                <div className="absolute top-3.5 left-5 text-xl">010</div>
              </div>
              <button className="w-full border border-blue-600 text-white bg-blue-500 text-xl py-3 rounded-xl">
                인증번호 받기
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
                아래 내용을 확인하였으며, 모두 동의합니다.
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
                  만 14세 이상입니다.
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
                  개인정보 수집 및 이용 동의
                </label>
                <PopupBtn
                  text="자세히 보기"
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
                  게임플레이 등에 유용한 소식 받기
                </label>
                <PopupBtn
                  text="자세히 보기"
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
          <h2 className="text-2xl font-bold text-black">유의사항</h2>
          <div className="my-6">
            <NoticeList text="사전등록 보상은 계정 당 1회 수령 가능하며, 2023년 1월 31일(화) 업데이트 후 ~ 2023년 3월 9일(목) 오후 11시 59분까지 게임에 접속 시 우편함으로 지급됩니다." />
            <NoticeList text="이벤트 스토리 업데이트 선물은 계정 당 1회 수령 가능하며, 2023년 1월 31일(화) 업데이트 이후 우편함으로 지급될 예정입니다. 상세 내용은 별도 공지를 통해 확인 부탁 드립니다." />
            <NoticeList text="이벤트 진행 일정 및 선물은 내부사정에 따라 변경 될 수 있습니다." />
            <NoticeList text="사전등록 선물 관련 상세한 내용은 공식 커뮤니티 내 사전등록 이벤트 공지를 통해 확인 부탁 드립니다." />
            <NoticeList text="등록하신 휴대폰번호로 ㈜넥슨코리아가 제공하는 모든 게임 및 서비스의 업데이트, 사전등록, 이벤트 참가 등 도움이 되는 정보를 받을 수 있습니다." />
            <NoticeList text="광고 문자 수신 동의 철회를 원하실 경우, [넥슨홈페이지]-[고객센터]-[모바일게임]-[블루 아카이브] 선택 후 문의해주시기 바랍니다." />
            <NoticeList text="휴대전화 문자 스팸 기능 또는 통신사 스팸 문자 차단이 설정되었을 경우 문자를 받지 못할 수 있으니, 꼭 해당 차단 기능 설정을 해제해주시기 바랍니다." />
            <NoticeList text="잘못된 휴대전화 번호를 입력하여 문자를 받지 못할 경우 도움을 드릴 수 없으니, 정확한 휴대전화 번호를 입력해주시기 바랍니다." />
            <NoticeList text="타인의 휴대전화 번호를 도용할 경우 이벤트 참가가 제한될 수 있습니다." />
            <NoticeList text="휴무일 또는 업무시간 외 광고 문자 수신 동의 철회를 요청하시는 경우, 다음 업무일에 처리됩니다." />
          </div>
          <button
            onClick={() => {
              setIsNotice(false);
            }}
            className="border-2 py-2 px-9 border-black font-bold text-lg"
          >
            확인
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
              개인정보 수집 및 이용 동의
            </h2>
            <span>
              (주)넥슨코리아는 다음과 같이 개인정보를 수집 및 이용하고 있습니다.
            </span>
            <table className="border-collapse my-4 w-full">
              <tbody>
                <tr>
                  <th className="border bg-gray-200 border-black px-2 py-2">
                    수집 및 이용 목적
                  </th>
                  <td className="border border-black px-2 py-2 text-lg font-bold">
                    이벤트 등 프로모션 알림 전송
                  </td>
                </tr>
                <tr>
                  <th className="border bg-gray-200 border-black px-2 py-2">
                    항목
                  </th>
                  <td className="border border-black px-2 py-2">휴대폰 번호</td>
                </tr>
                <tr>
                  <th className="border bg-gray-200 border-black px-2 py-2">
                    보유 및 이용기간
                  </th>
                  <td className="border border-black px-2 py-2 text-lg font-bold">
                    수집일로부터 1년
                  </td>
                </tr>
              </tbody>
            </table>
            <NoticeList text="동의를 거부할 경우 사전등록이 불가능 합니다." />
          </div>
          <div className="border-t-2">
            <h2 className="text-2xl my-5 font-bold text-center text-black">
              개인정보 수집 및 이용 동의
            </h2>
            <span>
              (주)넥슨코리아는 다음과 같이 개인정보를 위탁하고 있습니다.
            </span>
            <table className="w-full border-collapse table-fixed text-center my-4">
              <tr>
                <th className="border border-black py-2 bg-gray-200">
                  위탁업체
                </th>
                <th className="border border-black py-2 bg-gray-200">
                  위탁 목적
                </th>
              </tr>
              <tr>
                <td className="border border-black py-2">(주)넥슨네트웍스</td>
                <td className="border border-black py-2">문의대응</td>
              </tr>
              <tr>
                <td className="border border-black py-2">(주)다우기술</td>
                <td className="border border-black py-2">
                  이벤트 등 프로모션 알림 전송
                </td>
              </tr>
            </table>
            <NoticeList text="그 외의 사항 및 자동 수집 정보와 관련된 사항은 개인정보처리방침을 따릅니다." />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setIsPrivacyAggree(false);
              }}
              className="border-2 py-2 px-9 border-black font-bold text-lg"
            >
              확인
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
            게임플레이 등에 유용한 소식 받기
          </h2>
          <div className="text-center text-lg font-bold">
            ㈜넥슨코리아가 제공하는 모든 게임 서비스의 업데이트, 사전등록,
            이벤트 참가 등 도움이 되는 정보를 받을 수 있습니다.
          </div>
          <button
            onClick={() => {
              setIsMacketingAggree(false);
            }}
            className="border-2 py-2 px-9 border-black font-bold text-lg"
          >
            확인
          </button>
        </div>
      </Popup>
    </>
  );
}
