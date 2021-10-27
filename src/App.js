import "./App.css";
// import { PaginationBar } from "./Components/PaginationBar";

import Navbar from "./Components/Navbar";
import Container from '@mui/material/Container';
import { Pokemon } from "./Components/Pokemon";

function App() {
  return (
    <div className="App">
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
