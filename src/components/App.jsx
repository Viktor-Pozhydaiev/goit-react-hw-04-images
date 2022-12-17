import { toast, Toaster } from 'react-hot-toast';
import { searchImages } from './Api/api';
import { Loader } from './Loader/Loader';
import { Section } from './Section/Section';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { SearchBar } from './Searchbar/Searchbar';
import { useState, useEffect } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getImages() {
      if (query === '') {
        return;
      }
      try {
        setIsLoading(true);
        const images = await searchImages(query, pageNumber);

        if (images.length > 0) {
          setImages(prevState => [...prevState, ...images]);
          setIsLoading(false);
          toast.success(
            `Congratulations, we have found ${images.length} pictures`
          );
        } else {
          setIsLoading(false);
          return toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch {
        toast.error(
          'Please wait a few minutes, we are repairing the website... '
        );
      }
    }
    getImages();
  }, [pageNumber, query]);

  const handelFormSubmit = query => {
    setQuery(query);
    setPageNumber(1);
    setImages([]);
  };
  const addPage = () => {
    setPageNumber(prevState => prevState + 1);
  };

  return (
    <Section>
      <SearchBar onSubmit={handelFormSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoading && <Button addPage={addPage} />}
      {isLoading && <Loader />}
      <Toaster position="top-right" />
    </Section>
  );
};
