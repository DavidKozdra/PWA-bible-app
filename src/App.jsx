import { createSignal, createEffect } from 'solid-js';
import './App.css';
import kjv from "./bible/en_kjv"

function App() {
  console.log(kjv)
  const [bibleData, setBibleData] = createSignal([kjv]);

  createEffect(async () => {
    console.log(kjv)
    setBibleData(kjv)
    console.log(bibleData)
  });

  return (
    <div class="App">
      <header class="App-header">
        <h1>The Holy Bible </h1>
        {kjv.map((book, bookIndex) => (
          <div key={bookIndex} class="book">
            <h2>{book.abbrev}</h2>
            {book.chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} class="chapter">
                <h3>Chapter {chapterIndex + 1}</h3>
                {chapter.map((verse, verseIndex) => (
                  <p key={verseIndex}>{verse}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
