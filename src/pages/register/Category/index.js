import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CategoryRegistration() {

    const initialValues = {
        name: '',
        description: '',
        color: ''
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValues);

    //TODO: undestand this '[]' behaviour
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(event) {
        const { getAttribute, value } = event.target;
 
        setValue(
            getAttribute('name'),
            value
        );
    }


    return (
        <PageDefault >
            <h1>Category registration: {values.name}</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);

                setValues({ initialValues })
            }}>
                <div>
                    <label>
                        Category name:
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                        />
                    </label>

                    <label>

                        Color:
                    <input
                            name="color"
                            type="color"
                            value={values.color}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button>
                    Register
                </button>
            </form>

            <ul>
                {categories.map((category, i) => {
                    return (
                        <li key={`${category}${i}`}>
                            {category.name}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Go to home
            </Link>
        </PageDefault >
    )
};

export default CategoryRegistration;