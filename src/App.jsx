
 import Header from './Pages/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default App;