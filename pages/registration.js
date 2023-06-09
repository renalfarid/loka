import { useState } from 'react';
import {
  useShortAnswerInput,
  useLongAnswerInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks';

import ButtonPrimary from "../components/misc/ButtonPrimary";
import form from '../src/data/GoogleForm.json';
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Hero from "../components/Hero";

const formInputs = {
  id: 'inputId',
  type: 'text',
};

const ShortAnswerInput = ({ id, type }) => {
  const { register, label } = useShortAnswerInput(id);

  return <input type={type} aria-label={label} {...register()} />;
};

const LongAnswerInput = ({ id, type }) => {
  const { register, label } = useLongAnswerInput(id);

  return <textarea type={type} aria-label={label} {...register()} />;
};

const Registrasi = () => {
  const [formData, setFormData] = useState({});
  const methods = useGoogleForm({ form });

  const onSubmit = async (data) => {
    setFormData(data);
    await methods.submitToGoogleForms(data).then(() => {
      alert('Form submitted with success!');
    });
  };

  return (
    <>
      <SeoHead title='Loka Academy Indonesia' />
      <Layout>
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"id="registration"></div>
        <div className="relative w-full flex">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-vzoSLuIebbuVndnHeQlBNgCRlKA9hqqhkR_O-o4ePaFj8g/viewform?embedded=true" width="100%" height="1500">Loading…</iframe>
        </div>
        
      </Layout>
    </>
  );
};

export default Registrasi;
