import React, { useState, useEffect } from 'react'
import PostServiceFilter from '../../service/PostServiceFilter';
import { Callback } from '../../Interfaces';
import { useFetching } from '../../hooks/useFetching';


const FilterCharacter: React.FC<Callback> = ({ updatePosts, updateLoading, updateError }) => {
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('')
  const [itPage, setItPage] = useState(1)
  const [pages, setPages] = useState(1)

  

  const [fetchData, isDataLoading, dataError] = useFetching(async () => {
    // Запрос на сервер для получения объектов по страницам
    let url = `https://rickandmortyapi.com/api/character/`;
    if (itPage > 1) {
      url += `?page=${itPage}`
    }
    if (statusFilter) {
      url += `${itPage > 1 ? '&' : '?'}status=${statusFilter}`;
    }
    if (genderFilter) {
      url += `${statusFilter ? '&' : '?'}gender=${genderFilter}`;
    }


    const response = await PostServiceFilter.getFilter(itPage, url);
    updatePosts(response.data.results , response.data.info.pages)
    setPages(response.data.info.pages)
    updateLoading(isDataLoading)
    updateError(dataError)
    }
  )


  useEffect(() => {
    fetchData()
  }, [itPage, statusFilter, genderFilter])

  const onPageHandlerPlus = () => {
    if (itPage < pages) {
      setItPage(itPage + 1)
    }
  }

  const onPageHandlerMinus = () => {
    if (itPage > 1) {
      setItPage(itPage - 1)
    }
  }

  return (
    <>
      <form>
        <label>
          Status:
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Any</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <label>
          Gender:
          <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
      </form>
      <div>

        <span onClick={onPageHandlerMinus}>❮ </span>
        <span>{itPage}</span>
        <span onClick={onPageHandlerPlus}> ❯</span>
      </div>
    </>
  )

}
export default FilterCharacter