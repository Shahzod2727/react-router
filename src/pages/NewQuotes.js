import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const addQuoteHandler = (quoteData) => {
    console.log();
  };

  return <QuoteForm onAddQuote={addQuoteHandler}/>;
};

export default NewQuotes;
