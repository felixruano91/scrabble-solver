import { useState, ChangeEvent, useRef, useEffect } from 'react';
import {
  ScrabbleSection,
  PatternInput,
  Description,
  Header,
  UploadButton,
  MainContainer,
  ResultsList,
} from "./components"
import { isAnagram, getScrabbleScore } from "./utils";

function App() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [pattern, setPattern] = useState("");
  const [dictionary, setDictionary] = useState<string[]>([]);
  const [results, setResults] = useState<string[][]>([]);
  const isDisabled = dictionary.length === 0;

  useEffect(() => {
    const timoutId = setTimeout(() => {
      const anagrams = dictionary.filter((word) => word ? isAnagram(word, pattern) : false);
      const anagramsSortedByScrabbleScore = anagrams.reduce((arr: string[][], word) => {
        const score = getScrabbleScore(word);
        /* words with special characters can return NaN as score
        if that's the case we don't push them */
        if (isNaN(score)) return arr;

        arr.push(`${score} ${word}`.split(" "));
        return arr;
      }, []).sort(([scoreA], [scoreB]) => parseInt(scoreB, 10) - parseInt(scoreA, 10));

      setResults(anagramsSortedByScrabbleScore)
    }, 1000);

    return () => clearTimeout(timoutId);
  }, [pattern, dictionary])

  const handleClickAddFile = () => fileInput.current?.click();

  const handleFileInputChange = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (files && files.length > 0) {
      const file = files[0];
      let reader = new FileReader();

      reader.onload = ({ target }) => {
        const file = target?.result as string;
        const lines = file.split(/\r\n|\n/);
        setDictionary(lines);
      }

      reader.readAsText(file)
    }
  };

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setPattern(value);

  return (
    <MainContainer className="App">
      <UploadButton disabled={!isDisabled} onClick={handleClickAddFile}>Upload words.txt</UploadButton>
      <input
        ref={fileInput}
        type="file"
        accept=".txt"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <ScrabbleSection>
        <Header>Scrabble Solver</Header>
        <Description>Type a pattern of letters to find results from the dictionary</Description>
        <PatternInput
          placeholder="pattern"
          disabled={isDisabled}
          value={pattern}
          onChange={handleInputChange}
        />
        {results.length > 0 && (
          <ResultsList results={results} />
        )}
      </ScrabbleSection>
    </MainContainer>
  );
}

export default App;
