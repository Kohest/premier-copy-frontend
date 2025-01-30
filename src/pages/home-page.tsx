import HeaderToolbar from "../features/header-toolbar/header-toolbar";
import FilmSlider from "../widgets/film-slider/film-slider";
import MainBanner from "../shared/ui/main-banner";
import FilmSliderSm from "../widgets/film-slider-sm/film-slider-sm";
import SubscriptionAdvert from "../shared/ui/subscription-advert";
import SliderSmItemSkeleton from "../shared/ui/skeletons/slider-sm-item-skeleton";
import { useGetSmSliderItems } from "../shared/hooks/useGetSmSliderItems";
import { useProfileStore } from "../entities/user/store/use-profile";
import { useGetBanner } from "../shared/hooks/use-get-banner";
import toast from "react-hot-toast";
import AdvertBannerSkeleton from "../shared/ui/skeletons/advert-banner-skeleton";

const HomePage = () => {
  const { loading, sliderItems } = useGetSmSliderItems({ count: 5 });
  const {
    error,
    bannerItem,
    loading: bannerLoading,
  } = useGetBanner("dsnu2gse");
  const { userData, loading: userDataLoading } = useProfileStore();
  error?.length &&
    toast.error("Что-то пошло не так", { position: "bottom-right" });
  return (
    <>
      <HeaderToolbar />
      <main className="flex-[1_0_auto]">
        <div>
          {sliderItems?.length > 0 && (
            <div className="pb-[22px]">
              <FilmSlider sliderItems={sliderItems} />
            </div>
          )}
          <section className="main-container">
            {bannerLoading || !bannerItem ? (
              <AdvertBannerSkeleton />
            ) : (
              <MainBanner
                showId={bannerItem.contentId}
                subtitle={bannerItem.subtitle}
                title={bannerItem.title}
                image={bannerItem.image}
              />
            )}
          </section>
          <section className="py-[26px]">
            {loading ? (
              <div className="flex justify-between main-container">
                {Array.from({ length: 5 }).map((item, index) => (
                  <SliderSmItemSkeleton key={index} />
                ))}
              </div>
            ) : (
              <FilmSliderSm
                title="Популярное"
                sliderItems={sliderItems}
                titleLink="/catalog/movies"
              />
            )}
          </section>
          {(!userData || userData?.subscriptions?.length === 0) &&
            !userDataLoading && (
              <section className="main-container">
                <SubscriptionAdvert />
              </section>
            )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
