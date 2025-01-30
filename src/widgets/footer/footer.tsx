import { Send } from "lucide-react";
import Column from "./ui/column";
import {
  footerLeftColumn,
  footerRightColumn,
} from "../../shared/constants/footer-data";
import SocialMediaItem from "../../shared/ui/social-media-item";
import {
  FaOdnoklassniki,
  FaTelegram,
  FaViber,
  FaVk,
  FaYandex,
} from "react-icons/fa";
import SocialMediaItemSm from "../../shared/ui/social-media-item-sm";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <div className="bg-[#0f0f10] border-top border-[1px] border-[#1d1d1d]">
        <div className="main-container w-full">
          <div className="pt-[80px] pb-[55px] w-full">
            <nav className="mx-auto mb-[28px] flex justify-between">
              <div className="mr-[30px] flex">
                <div className="mr-16 w-[240px]">
                  <Column columnItems={footerLeftColumn} title="Разделы" />
                  <button className="mt-4 rounded-xl gap-2 h-10 py-[10px] px-[20px] bg-[#292929] flex items-center">
                    <Send className="size-5" />
                    <span className="text-[#ececec] font-[500]">
                      Задать вопрос
                    </span>
                  </button>
                </div>
                <div>
                  <Column columnItems={footerRightColumn} title="Информация" />
                </div>
              </div>
              <div>
                <div className="w-full">
                  <h4 className="mb-4">
                    Смотрите фильмы, сериалы и шоу на любом устройстве
                  </h4>
                  <ul className="grid-cols-3 max-w-[450px] gap-3 grid ">
                    <SocialMediaItem
                      image="https://premier.one/_nuxt/appstore.DiC17Pb-.svg"
                      link="https://app.appsflyer.com/id1334187043"
                    />
                    <SocialMediaItem
                      image="https://premier.one/_nuxt/googleplay.iqOy1YOm.svg"
                      link="https://play.google.com/store/apps/details?id=gpm.tnt_premier"
                    />
                    <SocialMediaItem
                      image="https://premier.one/_nuxt/appgallery.BKWR3Y5C.svg"
                      link="https://appgallery.huawei.com/#/app/C105166947"
                    />
                    <SocialMediaItem
                      image="https://premier.one/_nuxt/getapps.BwvjPISR.svg"
                      link="https://global.app.mi.com/details?lo=RU&la=ru&id=one.premier.mi"
                    />
                    <SocialMediaItem
                      image="https://premier.one/_nuxt/rustore.CZetba7u.svg"
                      link="https://www.rustore.ru/catalog/app/gpm.tnt_premier"
                    />
                    <SocialMediaItem
                      image="https://premier.one/_nuxt/smart-tv.M7fl7qd2.svg"
                      link="/"
                    />
                  </ul>
                </div>
                <div className="w-fit mt-[37px]">
                  <h4 className="block mb-3 text-[#bdbdbd]">Мы в соцсетях:</h4>
                  <ul className="flex w-full justify-start items-center">
                    <SocialMediaItemSm link="/" icon={<FaTelegram />} />
                    <SocialMediaItemSm link="/" icon={<FaVk />} />
                    <SocialMediaItemSm link="/" icon={<FaOdnoklassniki />} />
                    <SocialMediaItemSm link="/" icon={<FaViber />} />
                    <SocialMediaItemSm link="/" icon={<FaYandex />} />
                    <SocialMediaItemSm link="/" icon={<RiYoutubeFill />} />
                  </ul>
                </div>
              </div>
            </nav>
            <p className="text-left text-[#8a8a8a] ">
              Copyright 2024 ©PREMIER. Все права защищены
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
