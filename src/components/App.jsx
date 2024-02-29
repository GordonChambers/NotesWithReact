import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function createNote(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
