import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./ui/navigation";
import SearchBar from "../../features/SearchBar/SearchBar";
import LogoItem from "../../shared/ui/logo-item";
import HeaderModal from "./ui/header-modal";
import { useProfile } from "../../shared/hooks/use-profile";
import { useOutside } from "../../shared/hooks/use-click-outside";
import ProfileModal from "../../features/profile-modal/profile-modal";
import GlobalModal from "../global-modal/globalModal";
import toast from "react-hot-toast";
import Loader from "../../shared/ui/loader";
const Header = () => {
  const [modal, setModal] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const { error, loading, userData, logout } = useProfile();
  const { isShow, ref, setIsShow } = useOutside(false);
  const location = useLocation();
  const handleLogout = async () => {
    await logout();
    setIsShow(false);
  };
  useEffect(() => {
    setIsShow(false);
  }, [location.pathname]);
  useEffect(() => {
    error && toast.error("Что-то пошло не так", { position: "bottom-right" });
  }, [error]);
  return (
    <>
      {authModal && <GlobalModal setAuthModal={setAuthModal} />}
      <header className="z-[11] px-[3.25rem] min-h-[5rem] w-full fixed top-0 left-0 bg-[#0f0f10]/50 backdrop-blur-2xl">
        <div className="h-[5rem] flex items-center">
          <div className="flex items-center relative w-full ">
            <LogoItem />
            <div className="ml-0 flex w-full">
              <div
                className="mr-auto ml-2 relative"
                onMouseLeave={() => {
                  setModal(false);
                }}
              >
                <Link to={"/all"}>
                  <button
                    onMouseOver={() => setModal(true)}
                    className="rounded-xl gap-2 h-10 py-[10px] px-[20px] bg-[rgba(41,41,41,.65)] flex items-center justify-center transition hover:bg-[rgba(83,83,83,0.85)]"
                  >
                    <Menu className="size-4 text-white" />
                    <span className="text-white">Каталог</span>
                  </button>
                </Link>
                {modal && <HeaderModal />}
              </div>
              <SearchBar />
              <Navigation />
              {loading ? (
                <Loader />
              ) : userData ? (
                <div className="flex justify-center items-center relative">
                  {userData?.subscriptions?.length === 0 && (
                    <Link
                      to="/subscriptions"
                      title={userData.name}
                      className="relative flex ml-[20px] gap-1 h-10 py-[10px] px-[20px] bg-[#fddd2d] text-[#141414] rounded-xl justify-center items-center"
                    >
                      <span className="px-[20px] flex-grow-0 font-[500] text-[14px] whitespace-nowrap">
                        Подключить подписку
                      </span>
                    </Link>
                  )}
                  <div
                    className="ml-2 w-fit text-[#ececec] cursor-pointer"
                    onClick={() => setIsShow(!isShow)}
                  >
                    <div className="h-[44px] w-[44px] bg-[#292929] flex rounded-full justify-center items-center">
                      <img
                        src={userData.avatar}
                        alt="avatar"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  {isShow && (
                    <div ref={ref}>
                      <ProfileModal handleLogout={handleLogout} />
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setAuthModal(true)}
                    className="flex flex-row justify-center items-center ml-5 h-10 gap-1 w-[400px] bg-[#fddd2d] text-[#141414] py-[.625rem] rounded-xl"
                  >
                    <span className="text-sm font-[500]">30 дней за 1₽</span>
                  </button>
                  <button
                    onClick={() => setAuthModal(true)}
                    className="ml-[.5rem] text-[#ececec] h-[2.5rem] w-auto px-[1.25rem] rounded-[.75rem] bg-[rgba(41,41,41,.65)] flex items-center justify-center"
                  >
                    <span className="text-[.875rem] font-[500]">Войти</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
