import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  return (
    <>
      <h1 className="my-5">Héroes de Marvel</h1>
      <HeroList 
        publisher='Marvel Comics'
      />
    </>
  );
};
