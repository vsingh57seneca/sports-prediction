import { Filters } from '@/interfaces/Filters'
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface FilterProps {
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>;
    filterName: string;
    filterConditions: any[];
    target: keyof Filters

}

const Filter = ({ filters, setFilters, filterName, filterConditions, target }: FilterProps) => {
    const handleChange =  (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
        setFilters({
            ...filters,
            [target]: typeof filters[target] === 'number' ? parseInt(value, 10): value
        });
        
    }

  return (
    <div>
      <label htmlFor="">
        <h1>{filterName}</h1>
        <select value={filters.dataSetSize} onChange={handleChange}  className='text-black'>
          {filterConditions.map((fc, index) => (
            <option key={index} value={fc.size}>{fc.name}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Filter