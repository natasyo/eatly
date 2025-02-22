import { productCategoryController } from "@/controllers";
import BtnRemove from "@/react/components/buttons/btn-remove";
import CategoryItem from "@/react/components/search/category-item";
import { Category } from "@/types";
import { on } from "process";
import { FunctionComponent } from "react";

interface CategoryItemsAdminProps {
    categories: Category[],
    onRemove?: (category: Category) => void
}

const CategoryItemsAdmin: FunctionComponent<CategoryItemsAdminProps> = ({ categories, onRemove }) => {
    return (
        <div className="flex flex-wrap mt-9">
            {categories.map((category) => (
                <div key={category.id} className="relative">
                    <BtnRemove
                        className="absolute right-3 top-3 hover:scale-110"
                        onClick={() => {
                            onRemove && onRemove(category)
                        }}
                    />
                    <CategoryItem className="m-2 w-[108px]" item={category} />
                </div>
            ))}
        </div>)
}

export default CategoryItemsAdmin;