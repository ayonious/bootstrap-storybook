import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../index';

describe('Card Component', () => {
  const defaultProps = {
    title: 'Test Title',
    excerpt: 'Test excerpt text',
    img: 'test-image.jpg'
  };

  it('renders with all props', () => {
    render(<Card {...defaultProps} />);
    
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.excerpt)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps.img);
  });

  it('renders author name', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText(/by Ayon/)).toBeInTheDocument();
  });

  it('renders title in h2', () => {
    render(<Card {...defaultProps} />);
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toHaveTextContent(defaultProps.title);
  });

  it('renders excerpt in paragraph', () => {
    render(<Card {...defaultProps} />);
    const excerptElement = screen.getByText(defaultProps.excerpt);
    expect(excerptElement.tagName).toBe('P');
  });

  it('renders image with correct source', () => {
    render(<Card {...defaultProps} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', defaultProps.img);
  });
}); 