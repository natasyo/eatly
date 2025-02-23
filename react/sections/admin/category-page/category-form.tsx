'use client';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import FileBox from '@/react/components/fields/file-box';
import TextBox from '@/react/components/fields/text-box';
import { Category } from '@/types';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ColorBox from '@/react/components/fields/color-box';
import CategoryItem from '@/react/components/search/category-item';

interface CategoryFormProps {
  className?: string;
  onChange?: (category: Category) => void;
  onChangeFakeImgUrl?: (fakeUrl: string) => void;
  imgFakeUrl?: string;
  onSave?: (category: Category) => void;
}

const CategoryForm: FunctionComponent<CategoryFormProps> = ({ className, onSave, onChange }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm<Category>({
    defaultValues: {
      colorBg: '#00aaff',
      colorTitle: '#ffdd00',
    },
  });

  const fileRef = useRef<{ resetFile: () => void }>(null);

  useEffect(() => {
    if (onChange) onChange({ ...watch() });
    console.log(register('image'));
  }, []);

  const [category, setCategory] = useState<Category | null>(null);
  return (
    <div className={`${className ? className : ''} flex`}>
      <form
        className="mr-10 shrink-0"
        onSubmit={handleSubmit(
          (data) => {
            if (onSave) onSave(data);
            reset();
            setCategory(null);
            setValue('image', undefined);
            fileRef.current?.resetFile();
          },
          (categ) => {
            console.log(categ);
          },
        )}
      >
        <TextBox
          label="Category name"
          {...register('title', { required: 'This Field is required' })}
          error={errors.title?.message}
          onChange={(e) => {
            const title = (e.target as HTMLInputElement).value;
            setCategory({ ...watch(), title });
          }}
        />
        <div className="flex">
          <ColorBox
            label="Text color"
            {...register('colorTitle', { required: 'This Field is required' })}
            className="mr-4"
            onChange={(e) => {
              const colorTitle = (e.target as HTMLInputElement).value;
              setCategory({ ...watch(), colorTitle });
            }}
          />
          <ColorBox
            label="Background color"
            {...register('colorBg', { required: 'This Field is required' })}
            onChange={(e) => {
              const colorBg = (e.target as HTMLInputElement).value;
              setCategory({ ...watch(), colorBg });
            }}
          />
        </div>

        <FileBox
          {...register('image')}
          ref={fileRef}
          onChange={(e) => {
            const fileImage = e.target.files?.[0];
            if (fileImage) {
              setCategory({ ...watch(), image: URL.createObjectURL(fileImage) });
              setValue('image', fileImage);
            }
          }}
        />
        <BtnPrimary type="submit">Save</BtnPrimary>
      </form>
      {category && (category?.image || category?.title) && (
        <div className="grow-1 w-full">
          <p className="text-xl font-bold text-eatly-black-100">Preview</p>
          <CategoryItem item={category} isSelect={true} className="max-w-28" />
        </div>
      )}
    </div>
  );
};

export default CategoryForm;
