import CategoryItem from '../category-item/category-item.comp'
import './directory.comp.scss'

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((thisCategory) => (
        <CategoryItem key={thisCategory.id} category={thisCategory} />
      ))}
    </div>
  )
}

export default Directory
