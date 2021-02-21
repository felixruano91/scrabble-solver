import {
  CellContainer,
  FlexContainer,
  ListContainer,
  ResultsContainer
} from "../components";

interface ResultsListProps {
  results: string[][];
}

export const ResultsList = ({ results }: ResultsListProps) => {
  return (
    <ResultsContainer>
      <FlexContainer>
        <CellContainer>
          <h2>Points</h2>
        </CellContainer>
        <CellContainer>
          <h2>Result</h2>
        </CellContainer>
      </FlexContainer>
      <ListContainer>
        {results.map(([score, word], index) => (
          <FlexContainer key={index}>
            <CellContainer>
              {score}
            </CellContainer>
            <CellContainer>
              {word}
            </CellContainer>
          </FlexContainer>
        ))}
      </ListContainer>
    </ResultsContainer>
  )
}
