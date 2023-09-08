import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useSubmitForm } from '../../hooks/useSubmitForm';

const RegisterForm = () => {

    // Custom hooks
    const {register} = useAuth();
    const {submit, error} = useSubmitForm(register);

  return (
    <form
        className='grid grid-cols-1 md:grid-cols-2 gap-2'
        onSubmit={submit}
    >

        <input
            type='text'
            name='name'
            placeholder='your name'
            className='md:col-span-2'
        />

        <input
            type='email'
            name='email'
            placeholder='info@example.com'
            autoComplete='username'
        />

        <input
            type='password'
            name='password'
            placeholder='password'
            autoComplete='current-password'
        />

        <button
            type='submit'
            className='md:col-span-2'
        >Создать</button>

        <small
            className='md:col-span-2 text-center'
        >
            <Link to='/login'>Уже есть аккаунт? Войти</Link>
        </small>

        {error ? (
            <small
                className='md:col-span-2 text-center text-orange-600'
            >{error}</small>
        ) : null}

    </form>
  )
}

export default RegisterForm