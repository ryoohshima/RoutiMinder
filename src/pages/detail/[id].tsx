import React, { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Paragraph from "@/components/atoms/Paragraph";
import fetchData from "@/lib/fetchData";
import { useRouter } from "next/router";
import withAuth from "@/hocs/withAuth";
import ButtonClick from "@/components/atoms/ButtonClick";
import ButtonSubmit from "@/components/atoms/ButtonSubmit";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const obj = {
    id: '',
    user_id: '',
    title: '',
    description: '',
    start_time: '',
    end_time: '',
    frequency: [],
    day_of_week: '',
    is_active: false,
    created_at: '',
    updated_at: '',
  };

  const [data, setData] = useState(obj);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(obj);

  useEffect(() => {
    if (id) {
      fetchData('id', id).then(result => {
        setData(result.props.routines[0]);
      });
    }
  }, [id]);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleEditClick = () => {
    setIsEdit(!isEdit);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send formData to the server
    console.log(formData);
  };

  return (
    <DefaultLayout>
      <form className="flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
        <label>
          <Paragraph text='Routine' size='medium' color='black' />
          <input
            className={`w-full mt-1 p-2 shadow-md ${isEdit ? 'bg-white' : 'bg-gray-200'}`}
            type="text"
            name="title"
            value={formData.title || ''}
            onChange={handleInputChange}
            readOnly={!isEdit}
          />
        </label>
        <label>
          <Paragraph text='Description' size='medium' color='black' />
          <input
            className={`w-full mt-1 p-2 shadow-md ${isEdit ? 'bg-white' : 'bg-gray-200'}`}
            type="text"
            name="description"
            value={formData.description || ''}
            onChange={handleInputChange}
            readOnly={!isEdit}
          />
        </label>
        <label>
          <Paragraph text='Start' size='medium' color='black' />
          <input
            className={`w-full mt-1 p-2 shadow-md ${isEdit ? 'bg-white' : 'bg-gray-200'}`}
            type="text"
            name="start_time"
            value={formData.start_time || ''}
            onChange={handleInputChange}
            readOnly={!isEdit}
          />
        </label>
        <label>
          <Paragraph text='End' size='medium' color='black' />
          <input
            className={`w-full mt-1 p-2 shadow-md ${isEdit ? 'bg-white' : 'bg-gray-200'}`}
            type="text"
            name="end_time"
            value={formData.end_time || ''}
            onChange={handleInputChange}
            readOnly={!isEdit}
          />
        </label>
        <label>
          <Paragraph text='Frequency' size='medium' color='black' />
          <input
            className={`w-full mt-1 p-2 shadow-md ${isEdit ? 'bg-white' : 'bg-gray-200'}`}
            type="text"
            name="frequency"
            value={formData.frequency || ''}
            onChange={handleInputChange}
            readOnly={!isEdit}
          />
        </label>
        <label>
          <Paragraph text='day_of_week' size='medium' color='black' />
          <input
            className={`w-full mt-1 p-2 shadow-md ${isEdit ? 'bg-white' : 'bg-gray-200'}`}
            type="text"
            name="day_of_week"
            value={formData.day_of_week || ''}
            onChange={handleInputChange}
            readOnly={!isEdit}
          />
        </label>
        <label>
          <Paragraph text='active' size='medium' color='black' />
          <input
            className=''
            type="checkbox"
            name="is_active"
            checked={formData.is_active || false}
            onChange={handleCheckboxChange}
            disabled={!isEdit}
          />
        </label>
        <div>
          <ButtonClick text={isEdit ? 'cancel' : 'edit'} color="primary" size="medium" bgColor="white" onClick={handleEditClick}/>
        </div>
        {isEdit && (
          <div>
            <ButtonSubmit text="submit" color="white" size="medium" bgColor="primary"/>
          </div>
        )}
    </form>
    </DefaultLayout>
  );
}

export default withAuth(DetailPage);
