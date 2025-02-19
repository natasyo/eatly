'use client';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import ColorBox from '@/react/components/fields/color-box';
import TextBox from '@/react/components/fields/text-box';
import { TypeDTO } from '@/types';
import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface TypeFormProps {
  type?: TypeDTO;
  className?: string;
  onSave?: (type: TypeDTO) => void;
}

const TypeForm: FunctionComponent<TypeFormProps> = ({ className, type, onSave }) => {
  const { register, handleSubmit, setValue, reset } = useForm<TypeDTO>({
    defaultValues: {
      bgColor: type?.bgColor,
      title: type?.title,
    },
  });
  useEffect(() => {
    console.log(type);
    setValue('id', type?.id);
    setValue('title', type?.title);
    setValue('bgColor', type?.bgColor);
  }, [type]);
  return (
    <div className={`${className ? className : ''}`}>
      <form
        onSubmit={handleSubmit((type) => {
          onSave && onSave(type);
          reset();
        })}
      >
        <TextBox label="Type" {...register('title', { required: 'This field is required' })} />
        <ColorBox
          label="Color"
          color={type?.bgColor}
          {...register('bgColor', { required: 'This field is required' })}
        />
        <BtnPrimary className="w-52" type="submit">
          Save
        </BtnPrimary>
      </form>
    </div>
  );
};

export default TypeForm;
