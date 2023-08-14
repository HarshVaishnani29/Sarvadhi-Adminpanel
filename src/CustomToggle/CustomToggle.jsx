import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <a href='react' className='text-decoration-none'
      onClick={decoratedOnClick}
    >
      {children}
    </a>
  );
}

export default CustomToggle;