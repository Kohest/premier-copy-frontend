import React from "react";
import SubscriptionAdvantageItem from "./subscription-adgantage-item";

const SubscriptionAdvantages = () => {
  return (
    <>
      <div className="mb-[20px] w-max">
        <h2 className="text-[34px] font-bold">Преимущества подписки</h2>
      </div>
      <div className="flex flex-wrap items-start">
        <SubscriptionAdvantageItem
          image="https://pic.uma.media/pic/cardgroup/d2/bc/d2bc6e332b5486982a1be34b6e162683.png"
          title="Широкий выбор 60 000+ сериалов, фильмов и шоу"
          subtitle="Хиты кинематографа, нашумевшие шоу, авторское кино и новинки
              каждую неделю"
          type="large"
        />
        <SubscriptionAdvantageItem
          className="ml-4"
          image="https://pic.uma.media/pic/cardgroup/40/c8/40c86fb44d886002efe40f3b48201def.png"
          title="Собственное производство PREMIER"
          subtitle="Оригинальные сериалы и шоу, которые можно смотреть только на
              PREMIER"
          type="small"
        />
        <SubscriptionAdvantageItem
          className="mt-4 mr-4"
          title="До 5 профилей в одной подписке и специальный профиль для детей"
          image="https://pic.uma.media/pic/cardgroup/df/18/df18e5fb3d4148cb630f9eeacbb8fa5b.png"
          type="small"
        />
        <SubscriptionAdvantageItem
          className="mt-[calc((25rem-17.125rem-1rem)*-1)]"
          image="https://pic.uma.media/pic/cardgroup/ed/fd/edfdcee14bb6a921981058157389b7f4.png"
          title="Просмотр без рекламы на любом устройстве"
          type="large"
        />
      </div>
    </>
  );
};

export default SubscriptionAdvantages;
