/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CategoryRegistration() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categories';
      fetch(URL)
        .then(async (serverResponse) => {
          if (serverResponse.ok) {
            const response = await serverResponse.json();
            console.log(response);
            setCategories(response);
            return;
          }
          throw new Error('Unable to fetch data');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Category registration:
        {values.name}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        setValues({ initialValues });
      }}
      >
        <div>
          <FormField
            label="Category"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <FormField
            label="Description"
            tag="textarea"
            value={values.description}
            onChange={handleChange}
          />

          {/* <label>
            Description:
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </label> */}

          <FormField
            label="Color"
            name="color"
            type="color"
            value={values.color}
            onChange={handleChange}
          />
        </div>

        <button>
          Register
        </button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
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
