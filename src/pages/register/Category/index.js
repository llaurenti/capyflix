/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import config from '../../../config';

function CategoryRegistration() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.THE_MOST_TOP_URL)
      .then(async (serverResponse) => {
        if (serverResponse.ok) {
          const response = await serverResponse.json();
          setCategories([
            ...response,
          ]);
          return;
        }
        throw new Error('Unable to fetch data');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Category registration:
        {values.title}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        clearForm();
      }}
      >
        <div>
          <FormField
            label="Category"
            name="title"
            value={values.title}
            onChange={handleChange}
          />

          <FormField
            label="Description"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormField
            label="Color"
            name="color"
            type="color"
            value={values.color}
            onChange={handleChange}
          />
        </div>

        <Button>
          Register
        </Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Go to home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;
