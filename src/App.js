import "./App.css";
// import { PaginationBar } from "./Components/PaginationBar";

import Navbar from "./Components/Navbar";
import Container from '@mui/material/Container';
import { Pokemon } from "./Components/Pokemon";

function App() {
  return (
    <div className="App">
    
            <meta property="og:site_name" content="Pokemon-Inventory" />
            <meta property='og:title' content='PokeDex App' />
            <meta property='og:image' content='https://ibb.co/cvn8TpR' />
            <meta property='og:description' content='Visual PokeDex App' />
            <meta property='og:url' content='https://pokemon-inventory.netlify.app/' />
            <meta property="og:type" content='website' />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='627' />
            {/* <!-- TYPE BELOW IS PROBABLY: 'website' or 'article' or look on https://ogp.me/#types --> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="en_US" />
              
      <div className="Navbar">
        <Navbar />
      </div>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <div className="Pokemon">
          <Pokemon />
        </div>
      </Container>

    </div>
  );
}

export default App;
