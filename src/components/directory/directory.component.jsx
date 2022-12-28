import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'

function Directory({ categories }) {

    return (

        <div className="directory-container">
            {categories.map((items) => (
                <CategoryItem category={items} />
            )
            )}

        </div>

    )
}

export default Directory;