import React from 'react'
import { Link } from 'react-router-dom'
import { useSubmitForm } from '../../hooks/useSubmitForm'
import { useAuth } from '../../hooks/useAuth'

const LoginForm = () => {

    // Custom hooks
    const {login} = useAuth();
    const {submit, error} = useSubmitForm(login);
    
    console.log(error)

  return (

    <form
        className='grid grid-cols-1 md:grid-cols-2 gap-2'
        onSubmit={submit}
    >

        <input
            type='email'
            name='email'
            placeholder='info@example.com'
            autoComplete='username'
            autoFocus
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
        >Войти</button>

        <small
            className='md:col-span-2 text-center'
        >
            <Link to='/register'>Нет аккаунта? Создать</Link>
        </small>

        {error ? (
            <small
                className='md:col-span-2 text-center text-orange-600'
            >{error}</small>
        ) : null}

    </form>
  )
  
}

export default LoginForm