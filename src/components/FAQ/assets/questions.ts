export interface Question {
  questionTag: string
  question: string
  answer: string
}

export const questions: Question[] = [
  {
    questionTag: "install",
    question: "How do I install Sansheets?",
    answer: `<p>1) In a new Google Sheet, go to Add-ons &rarr; Get Add-Ons.</p>
<p>2) After the Google Marketplace viewer opens in your Google Spreadsheet, look for Santiment in the search bar at the top right corner and install the Sansheets add-on.</p>
<p>3) After it has been installed, go back to your Google Spreadsheet and enable the Sansheets tool by going to Add-ons &rarr; Sansheets &rarr; Enable.</p>
<p>4) When this is done, you are ready to start using the Free version of Sansheets. Just type =SAN in an empty cell and you'll see a list of available functions to help you fetch data!</p>
<p>If you need more in-depth information on how you can install Sansheets, you can find it <a href="https://academy.santiment.net/sansheets/setting-up/" target="_blank" rel="noopener noreferrer">here</a>.</p>`,
  },
  {
    questionTag: "api-key",
    question: "How to add an API key for paid access?",
    answer: `<p>1) Pick a subscription from this page and go through the login and purchase process.</p>
<p>2) Find your API key in the account settings.</p>
<p>3) Setup Sansheets with your API as explained in <a href="https://academy.santiment.net/sansheets/adding-an-api-key/" target="_blank" rel="noopener noreferrer">this article</a>.</p>`,
  },
  {
    questionTag: "metrics",
    question: "How do I fetch metrics and pricing?",
    answer: `Sansheets was built in a way that it makes it easy for anyone to gain access to our data without the need for coding skills. When creating a new Google Spreadsheet, you always need to Enable the add-on under the Add-Ons tab. After that, you simply have to write =SAN in an empty cell, and you get a list of metric suggestions, ranging from MVRV metric to Social Volume, with descriptions. If you want to explore our metrics and how you can fetch them in Sansheets, take a look at <a href="https://academy.santiment.net/sansheets/functions/" target="_blank" rel="noopener noreferrer">its dedicated page</a> on our knowledge base.`,
  },
]
