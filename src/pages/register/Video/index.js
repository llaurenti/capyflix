import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoryRepository from '../../../repositories/categories';

function VideoRegistration() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: 'Hup hup',
    url: 'https://www.youtube.com/watch?v=SCwcJsBYL3o',
    category: 'Random',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((fetchedCategories) => {
        console.log(fetchedCategories);
        setCategories(fetchedCategories);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Video registration</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => category.titulo === values.categoria);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Video Title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Register
        </Button>
      </form>

      <br />
      <br />

      <Link to="/register/category">
        Category registration
      </Link>
    </PageDefault>
  );
}

export default VideoRegistration;
