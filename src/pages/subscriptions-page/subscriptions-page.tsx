import SubscriptionAdvantages from "./ui/subscription-advantages";
import Subscriptions from "../../widgets/subscriptions/subscriptions";

const SubscriptionsPage = () => {
  return (
    <main className="main-container">
      <div className="w-full py-[26px] h-[378px] relative">
        <div
          className="h-auto inset-0 w-auto absolute bg-cover "
          style={{ backgroundPosition: "50%" }}
        >
          <img
            src="https://fb-cdn.premier.one/files/premier/admin-api/7701/38e1/770138e1b445a44b10ad3ddb1d077fe5.png?quality=100"
            alt="promo"
            className="h-full object-cover"
            style={{ objectPosition: "right top" }}
          />
        </div>
      </div>
      <Subscriptions />
      <section className="w-full py-[26px]">
        <SubscriptionAdvantages />
      </section>
    </main>
  );
};

export default SubscriptionsPage;
