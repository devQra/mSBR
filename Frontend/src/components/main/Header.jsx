import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Fragment>
      <header className="flex flex-col w-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center py-4">
          <img src="/public/img/header-logo.webp" className="w-60" />
          <p className="text-center font-bold whitespace-pre-wrap font-mono text-sm">
            Spring Boot + React(Redux) <br />
            Mini Project
          </p>
        </div>
        <div className="flex flex-row w-screen justify-around items-center border-b border-gray-200 px-80 gap-6 pb-4">
          <Link to="/" className="text-lg p-2 text-gray-800">
            Home
          </Link>
          <Link to="/food/list" className="text-lg p-2 text-gray-800">
            부산 맛집
          </Link>
          <button className="group relative dropdown active focus:outline-none">
            <div className="flex flex-row text-lg text-gray-800 items-center justify-center group-hover:text-blue-800">
              부산에 가면
            </div>
            <div className="group-hover:block hidden dropdown-menu">
              <Link to="/info/list/1" className="dropdown-item">
                명소
              </Link>
              <Link to="/info/list/2" className="dropdown-item">
                음식
              </Link>
              <Link to="/info/list/3" className="dropdown-item">
                쇼핑
              </Link>
            </div>
          </button>
          <Link to="/youtube/find" className="text-lg p-2 text-gray-800">
            부산 동영상
          </Link>
          <Link to="/board/list" className="text-lg p-2 text-gray-800">
            커뮤니티
          </Link>
          <Link to="/news/list" className="text-lg p-2 text-gray-800">
            부산 여행 뉴스
          </Link>
        </div>
      </header>
    </Fragment>
  );
}
