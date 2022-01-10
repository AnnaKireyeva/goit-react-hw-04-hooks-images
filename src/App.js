import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

const apiKey = '24065015-abf144b31d6566bdcce4b2cfb';
const baseUrl = 'https://pixabay.com/api/';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImgUrl, setLargeImgUrl] = useState('');

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setHits([]);
    setPage(1);

    fetchImages();
  }, [query]);

  const fetchImages = () => {
    fetch(
      `${baseUrl}?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('No images for this request'));
      })
      .then(({ hits }) => {
        setHits(prev => [...prev, ...hits]);
        setPage(prevPage => prevPage + 1);

        if (hits.length === 0) {
          return toast.error('No images for your request');
        }
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
        toScroll();
      });
  };

  const toScroll = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  const getQueryFromForm = query => {
    setQuery(query);
  };

  const handleGalleryItem = e => {
    setLargeImgUrl(e.target.currentSrc);
    setShowModal(true);
  };

  const toggleModal = imgUrl => {
    setShowModal(!showModal);
    setLargeImgUrl(imgUrl);
  };

  return (
    <div className="App">
      <h1 className="Title">Image finder</h1>
      <Searchbar onSubmit={getQueryFromForm} />
      {error && <h1>Something went wrong.</h1>}
      <ToastContainer autoClose={3000} />
      <ImageGallery images={hits} onClick={handleGalleryItem} />
      {loading && (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000}
          className="Loader"
        />
      )}
      {hits.length > 0 && !loading && <Button loadMore={fetchImages} />}
      {showModal && <Modal onClose={toggleModal} src={largeImgUrl} alt="" />}
    </div>
  );
}
