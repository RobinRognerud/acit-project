import { RefreshOutlined } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Quote.css";

const Quote: React.FC = () => {
  const apiUrl: string = "https://type.fit/api/quotes";
  let allQuotes: Array<any> = [];
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Fetch quotes through API to webpage */
  const fetchQuotes = async (): Promise<void> => {
    try {
      const response = await fetch(apiUrl);
      allQuotes = await response.json();
      setQuote(getRandomQuote());
    } catch (err) {
      throw err;
    }
  };

  /* Gets quote from already fetched quotes using random index */
  const getRandomQuote = (): string => {
    const maxIndex: number = allQuotes.length;
    console.log(maxIndex);
    return allQuotes[Math.floor(Math.random() * maxIndex)].text;
  };

  return (
    <div>
      <Paper className="paperQuote" elevation={6}>
        <h3> Random generated quote </h3>
        {quote}
        <Button
          className="refreshButton"
          startIcon={<RefreshOutlined />}
          variant="contained"
          onClick={() => fetchQuotes()}
        >
          Refresh quote
        </Button>
      </Paper>
    </div>
  );
};

export default Quote;
