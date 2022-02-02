import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import 'animate.css'

export const HeroList = ({publisher}) => {

  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
        {
          heroes.map(hero => (
            <HeroCard 
              key={ hero.id } 
              { ...hero }
            />
          ))
        }
    </div>
  )
};
