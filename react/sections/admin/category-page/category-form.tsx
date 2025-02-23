'use client';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import FileBox from '@/react/components/fields/file-box';
import TextBox from '@/react/components/fields/text-box';
import { Category } from '@/types';
import { FunctionComponent, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ColorBox from '@/react/components/fields/color-box';

interface CategoryFormProps {
  className?: string;
  category?: Category;
  onChange?: (category: Category) => void;
  onChangeFakeImgUrl?: (fakeUrl: string) => void;
  imgFakeUrl?: string;
  onSave?: (category: Category) => void;
}

const CategoryForm: FunctionComponent<CategoryFormProps> = ({
  className,
  onSave,
  onChange,
  onChangeFakeImgUrl,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset
  } = useForm<Category>({
    defaultValues: {
      colorBg: '#00aaff',
      colorTitle: '#ffdd00'
    },
  });

  const fileRef = useRef<{ resetFile: () => void }>(null);

  useEffect(() => {
    onChange && onChange({ ...watch() });
    console.log(register('image'))
  }, []);

  return (
    <div className={`${className ? className : ''}`}>
      <form
        onSubmit={handleSubmit(
          (category) => {
            onSave && onSave(category);
            reset();
            setValue('image', undefined)
            fileRef.current?.resetFile()
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
            onChange && onChange({ ...watch(), title });
          }}
        />
        <div className="flex">
          <ColorBox
            label="Text color"
            {...register('colorTitle', { required: 'This Field is required' })}
            className="mr-4"
            onChange={(e) => {
              const colorTitle = (e.target as HTMLInputElement).value;
              onChange && onChange({ ...watch(), colorTitle });
            }}
          />
          <ColorBox
            label="Background color"
            {...register('colorBg', { required: 'This Field is required' })}
            onChange={(e) => {
              const colorBg = (e.target as HTMLInputElement).value;
              onChange && onChange({ ...watch(), colorBg });
            }}
          />
        </div>
        <FileBox
          {...register('image')}
          ref={fileRef}
          onChange={(e) => {
            const fileImage = e.target.files?.[0];
            if (fileImage) {
              onChangeFakeImgUrl && onChangeFakeImgUrl(URL.createObjectURL(fileImage));
              setValue('image', fileImage);
            }
          }}
        />
        <BtnPrimary type="submit">Save</BtnPrimary>
      </form>
    </div>
  );
};

export default CategoryForm;
