import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './components/ui/provider';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';


const queryClient = new QueryClient()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>

          <App />

        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>

);

reportWebVitals();
