import React, { useState } from 'react';

function Slides({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [restart, setRestart] = useState(true);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);

  const updateSlide = (index) => {
    setSlideIndex(index);
    setRestart(index === 0);
    setPrev(index !== 0);
    setNext(index === slides.length - 1);
  };

  const prevSlide = () => updateSlide(slideIndex - 1);
  const nextSlide = () => updateSlide(slideIndex + 1);

  return (
    <div>
      <div id='navigation' className='text-center'>
        <button
          onClick={() => updateSlide(0)}
          disabled={restart}
          data-testid='button-restart'
          className='small outlined'>
          Restart
        </button>
        <button
          data-testid='button-prev'
          disabled={prev}
          className='small'
          onClick={prevSlide}>
          Prev
        </button>
        <button
          data-testid='button-next'
          disabled={next}
          className='small'
          onClick={nextSlide}>
          Next
        </button>
      </div>

      <div id='slide' className='card text-center'>
        <h1 data-testid='title'> {slides[slideIndex].title} </h1>
        <p data-testid='text'>{slides[slideIndex].text}</p>
      </div>
    </div>
  );
}

export default Slides;
