import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import CategorySort from "../CategorySort/CategorySort"
import MaxPizzaPriceSort from "../MaxPizzaPriceSort/MaxPizzaPriceSort"
import PizzaNameSort from "../PizzaNameSort/PizzaNameSort"
import SelectSort from "../SelectSort/SelectSort"
import style from './filterWrapper.module.css'

const FilterWrapper = ({propsForFilter}) => {

    const {categoryState, setCategoryState, setters, maxPizzaPriceState, setMaxPizzaPriceState, inputRangeValue, setInputRangeValue, pizzaNameState,
setPizzaNameState, setCurrentPage, selectSortState,  setSelectSortState} = propsForFilter
    
    const [showFilter, setShowFilter] = useState(false)

    return (
        <div className={style.searchWrapper} >
        {showFilter ? (
            <AnimatePresence>
            <motion.div initial={{y: -40}} animate={{y: 0}} className={style.filtersContainer}>     
                <CategorySort categoryState={categoryState} setCategoryState={setCategoryState} setters={setters} setShowFilter={setShowFilter}/>
                <MaxPizzaPriceSort maxPizzaPriceState={maxPizzaPriceState} setMaxPizzaPriceState={setMaxPizzaPriceState} inputRangeValue={inputRangeValue} setInputRangeValue={setInputRangeValue}/>
                <PizzaNameSort name={pizzaNameState} setPizzaName = {setPizzaNameState} setCurrentPage={setCurrentPage}/>
                <SelectSort selectSortState={selectSortState} setSelectSortState={setSelectSortState}/> 
            </motion.div>
            </AnimatePresence>
        ): (
            <div className={style.showFiltersInnerBlock}>
                <div className={style.sh} onClick={() => {setShowFilter(true)}}>Фильтры</div>
            </div>
        )}
       
      </div>
    )
}

export default FilterWrapper