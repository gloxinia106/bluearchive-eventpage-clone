import { Dispatch, SetStateAction } from "react";

interface NavProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Nav({ currentPage, setCurrentPage }: NavProps) {
  const onClick = (num: number) => {
    setCurrentPage(num);
    console.log(num);
    window.fullpage_api.moveTo(num, 0);
  };
  return (
    <div className="fixed top-[40%] right-5">
      <nav className="grid gap-1">
        <button
          className="bg-[url('/current/nav_ko.png')] w-[185px] h-[55px]"
          style={{ backgroundPositionX: currentPage === 1 ? "-200px" : "" }}
          disabled={currentPage === 10 ? true : false}
          onClick={() => {
            onClick(1);
          }}
        />
        <button
          className="bg-[url('/current/nav_ko.png')] w-[185px] h-[55px] "
          style={{
            backgroundPositionY: "-59px",
            backgroundPositionX: currentPage === 2 ? "-200px" : "",
          }}
          disabled={currentPage === 10 ? true : false}
          onClick={() => {
            onClick(2);
          }}
        />
        <button
          className="bg-[url('/current/nav_ko.png')] w-[185px] h-[55px]"
          style={{
            backgroundPositionY: "-120px",
            backgroundPositionX: currentPage === 3 ? "-200px" : "",
          }}
          disabled={currentPage === 10 ? true : false}
          onClick={() => {
            onClick(3);
          }}
        />
        <button
          className="bg-[url('/current/nav_ko.png')] w-[185px] h-[55px]"
          style={{
            backgroundPositionY: "-182px",
            backgroundPositionX: currentPage === 4 ? "-200px" : "",
          }}
          disabled={currentPage === 10 ? true : false}
          onClick={() => {
            onClick(4);
          }}
        />
        <button
          className="bg-[url('/current/nav_ko.png')] w-[185px] h-[55px]"
          style={{
            backgroundPositionY: "-243px",
            backgroundPositionX: currentPage === 5 ? "-200px" : "",
          }}
          disabled={currentPage === 10 ? true : false}
          onClick={() => {
            onClick(5);
          }}
        />
      </nav>
    </div>
  );
}
