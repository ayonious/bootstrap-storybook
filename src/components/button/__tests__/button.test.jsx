import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles', () => {
    render(
      <Button style={{ fontSize: '20px' }}>
        Large Button
      </Button>
    );
    
    const button = screen.getByText('Large Button');
    expect(button).toHaveStyle({ fontSize: '20px' });
  });
}); 