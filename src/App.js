import React from 'react';
import ThemeButton from "./components/ThemeButton";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteContextProvider from "./contexts/NoteContext";
import ThemeContextProvider from "./contexts/themeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <NoteContextProvider>
            <Navbar/>
            <NoteList/>
            <NoteForm/>
            <ThemeButton/>
          </NoteContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
