

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import LearnWithAI from './Pages/LearnWithAI'
import Checkgrammer from './Pages/CheckGrammer';
import Chatbot from './Pages/Chatbot';
import CreateQuestions from './Pages/CreateQuestions'
localStorage.setItem('timestamp', 'undefined')
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage></HomePage>,

    },
    {
      path: '/home',
      element: <HomePage></HomePage>,

    },
    {
      path: '/learn',
      element: <LearnWithAI placeHolderName="What you want to learn today ?..."></LearnWithAI>,

    },
    {
      path: '/chatbot',
      element: <Chatbot placeHolderName="Say Hii..."></Chatbot>,

    },
    {
      path: '/learnenglish',
      element: <Checkgrammer placeHolderName="Type Your English sentence here..."></Checkgrammer>

    },
    {
      path: '/generatequestions',
      element: <CreateQuestions placeHolderName="Enter your query here...(example : create 5 questions on science topic)"></CreateQuestions>

    }


  ]
)

function App() {



  return (

    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
