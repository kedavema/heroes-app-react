import queryString from 'query-string'
import { useMemo } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  const { searchText } = formValues;


  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  } 

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h3 className="mt-3">Búsquedas</h3>
          <hr />

          <form onSubmit={ handleSearch }>
            <input 
              type="text"
              placeholder="Buscar un héroe..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />
            <button
              type="submit"
              className="btn btn-primary mt-3"
            >
              Buscar
            </button>
          </form>

        </div>
        <div className="col-7">
          <h3 className="mt-3">Resultados:</h3>
          <hr />

          {
            ( q === '')
              ? <div className='alert alert-info'>Busca un héroe</div>
              : ( heroesFiltered.length === 0) 
                  && <div className='alert alert-danger'>No hay resultados de búsqueda para: {q}</div>
          }

          {
            heroesFiltered?.map( hero => (
              <HeroCard 
                key={ hero.id }
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </>
  );
};
