import React from 'react'
import { useMessage } from '../../hooks/useMessage'
import { useSubmitForm } from '../../hooks/useSubmitForm';
import { useUser } from '../../hooks/useUser';

const SendMessageForm = () => {

  // Custom hooks
  const {sendMessage} = useMessage();
  const {submit, error} = useSubmitForm(sendMessage);

  return (
    <form
      className='flex gap-2 w-full'
      onSubmit={submit}
    >

      <input
          type='text'
          name='message'
          placeholder='Your message'
          className='w-full'
      />

      <button
        type='submit'
      >Отправить</button>

    </form>
  )
}

export default SendMessageForm