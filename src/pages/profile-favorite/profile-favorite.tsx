import SectionTitle from "../../shared/ui/section-title";
import FilmSliderSmItem from "../../widgets/film-slider-sm/ui/film-slider-sm-item";
import { useFavorite } from "../../shared/hooks/use-favorite";
import { formatServerUrl } from "../../shared/utils/formatServerUrl";
import EmptyFavorite from "./ui/empty-favorite";

const ProfileFavorite = () => {
  const { favoriteItems } = useFavorite();
  return (
    <div className="w-[calc(100%-354px)]">
      <section className="flex justify-start w-full flex-col">
        <SectionTitle text="Избранное" />
        {favoriteItems.length > 0 ? (
          <div className="grid grid-cols-4 gap-y-[52px] gap-x-4 w-full">
            {favoriteItems.map((item) => (
              <FilmSliderSmItem
                key={item.id}
                type="vertical"
                title={item.title}
                age={item.ageRating.toString()}
                score={item.averageRating._avg.rating}
                id={item.id}
                image={formatServerUrl(item.posterUrl)}
              />
            ))}
          </div>
        ) : (
          <EmptyFavorite />
        )}
      </section>
    </div>
  );
};

export default ProfileFavorite;
