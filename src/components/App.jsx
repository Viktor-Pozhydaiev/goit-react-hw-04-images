import { Component } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { searchImages } from './Api/api';
import { Loader } from './Loader/Loader';
import { Section } from './Section/Section';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    query: '',
    pageNumber: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const prevQuery = prevState.query;
      const newQuery = this.state.query;
      if (
        prevQuery !== newQuery ||
        prevState.pageNumber !== this.state.pageNumber
      ) {
        this.setState({ isLoading: true });

        const { pageNumber } = this.state;
        const images = await searchImages(newQuery, pageNumber);

        if (images.length > 0) {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            isLoading: false,
          }));
        } else {
          this.setState({ isLoading: false });
          return toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      }
    } catch {
      toast.error(
        'Please wait a few minutes, we are repairing the website... '
      );
    }
  }

  handelFormSubmit = query => {
    this.setState({ query, pageNumber: 1, images: [] });
  };
  addPage = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  render() {
    const { images, isLoading } = this.state;
    return (
      <Section>
        <SearchBar onSubmit={this.handelFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && !isLoading && <Button addPage={this.addPage} />}
        {isLoading && <Loader />}
        <Toaster position="top-right" />
      </Section>
    );
  }
}
