'use client';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import FileBox from '@/react/components/fields/file-box';
import { Category } from '@/types';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

interface CategoryFormProps {
  className?: string;
  category?: Category;
  onSave?: (category: Category) => void;
}

const CategoryForm: FunctionComponent<CategoryFormProps> = ({ className, onSave }) => {
  const { register, handleSubmit } = useForm<Category>();
  return (
    <div className="">
      <form
        onSubmit={handleSubmit((category) => {
          onSave && onSave(category);
        })}
      >
        <FileBox {...register('image', { required: 'This Field is required' })} />
        <BtnPrimary type="submit">Save</BtnPrimary>
      </form>
    </div>
  );
};

export default CategoryForm;
