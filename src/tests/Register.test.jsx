import { render, screen } from '@testing-library/react';
import { MemoryRouter,  } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';

describe('Register component', () => {
    it('Register render', () => {
        const route = '/register';

        render(<MemoryRouter initialEntries={[route]}>
            <RegisterPage />
        </MemoryRouter>)

        expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/info@example.com/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    })
})