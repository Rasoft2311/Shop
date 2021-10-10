import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { EditField } from './EditField';

export const EditFieldContainer = ({label, title, name, validationSchema, type, immutable}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isError, setIsError] = useState(false);
  const { editUser } = useAuth();

  const closeButtonHandler = () => {
    setIsEditing(!isEditing);
  };

  const editButtonHandler = () => {
    setIsEditing(!isEditing);
    setIsError(false);
  };

  const submitHandler = (data, { setSubmitting }) => {
    setSubmitting(true);
    editUser(data).then(
      ()=>{
        setIsEditing(!isEditing);
      },
      ()=> {
        setIsError(true);
        setIsEditing(false);
      }
    ).finally(() => setSubmitting(false));
  };
  return <EditField 
            submitHandler={submitHandler}
            initialValues={{[name]:(type === 'password' ? '' : title)}} 
            isError={isError} isEditing={isEditing} 
            editButtonHandler={editButtonHandler} 
            closeButtonHandler={closeButtonHandler} 
            validationSchema={validationSchema}   
            name={name} 
            title={(type === 'password' ? '.....................' : title)} 
            label={label} 
            immutable={immutable}/>;
};