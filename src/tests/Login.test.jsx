import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import { MemoryRouter,  } from 'react-router-dom';

describe('Login component', () => {
    it('Login renders', () => {

        const route ='/login'

        render(<MemoryRouter initialEntries={[route]}>
            <LoginPage />
        </MemoryRouter>)

        expect(screen.getByPlaceholderText(/info@example.com/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    })
});