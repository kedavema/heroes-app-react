import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
  return (
    <>
      <h1 className="my-5">Héroes de DC</h1>
      <HeroList 
        publisher='DC Comics'
      />
    </>
  );
};
