import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CategoryRegistration() {

    return (
        <PageDefault >
            <h1>Category registration</h1>

            <form>
                <label>
                    Category name:
                    <input type="text" />
                </label>

                <button>
                    Register
                </button>
            </form>

            <Link to="/">
                Go to home
            </Link>
        </PageDefault >
    )
};

export default CategoryRegistration;