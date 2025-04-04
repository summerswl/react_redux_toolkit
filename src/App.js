/**
 * Represents the main application component.
 * Renders the root div with a class name "App".
 * The Counter component is currently commented out.
 */
import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <AddPostForm/>
      <PostsList/>

    </div>
  );
}

export default App;
