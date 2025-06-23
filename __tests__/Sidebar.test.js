import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

// Mock next/link to avoid router errors during tests
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

describe('Sidebar', () => {
  it('renders all navigation links', () => {
    render(<Sidebar />);
    const links = ['Dashboard', 'Contacts', 'Quotes', 'Projects', 'Reports', 'Settings'];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
