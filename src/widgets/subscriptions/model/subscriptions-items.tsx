import SubscriptionItems from "../ui/subscription-items";
import SubscriptionsPremier from "../ui/subscriptions-premier";

export const menuItems = [
  {
    label: "PREMIER",
    component: (props: { isLoggedIn: boolean }) => (
      <SubscriptionsPremier {...props} />
    ),
  },
  {
    label: "СПОРТ",
    component: (props: { isLoggedIn: boolean }) => (
      <SubscriptionItems
        infoLogo="https://fb-cdn.premier.one/files/premier/88707782/20fb/dbc0/20fbdbc04784c0db1045bb8349e4c5f6.svg"
        infoImage="https://fb-cdn.premier.one/files/premier/upload/70c1/3003/70c13003816296e25b22217abd733154.png"
        infoText="Доступ к полной библиотеке PREMIER, трансляциям игр РПЛ, обзорам матчей и аналитике экспертов"
        subscriptionType="sport"
        {...props}
      />
    ),
  },
  {
    label: "PREMIER x RUTUBE",
    component: (props: { isLoggedIn: boolean }) => (
      <SubscriptionItems
        infoLogo="https://fb-cdn.premier.one/files/premier/83cd9f9b/62b5/44cc/62b544ccd7c106d6d47290509b877e92.png"
        infoText="Один аккаунт на три сервиса. В дополнение к подписке PREMIER еще больше фильмов и сериалов без рекламы в RUTUBE, а также премиум-оформление и музыкальные подборки в фоновом режиме Yappy."
        subscriptionType="premierxrutube"
        {...props}
      />
    ),
  },
  {
    label: "PREMIER x START",
    component: (props: { isLoggedIn: boolean }) => (
      <SubscriptionItems
        infoLogo="https://fb-cdn.premier.one/files/premier/1caddf6f/093a/3ee1/093a3ee17b509fbddb436de098032ea6.svg"
        infoText="Вся библиотека сериалов, фильмов и шоу от PREMIER, а также контент от онлайн-кинотеатра START. Без рекламы в отличном качестве."
        subscriptionType="premierxstart"
        {...props}
      />
    ),
  },
  {
    label: "START",
    component: (props: { isLoggedIn: boolean }) => (
      <SubscriptionItems
        infoLogo="https://fb-cdn.premier.one/files/premier/fb2fc10b/1f45/530e/1f45530e395fb041e495271b4332941e.svg"
        infoText="400+ топовых российских сериалов и фильмов от онлайн-кинотеатра START"
        subscriptionType="start"
        {...props}
      />
    ),
  },
];
