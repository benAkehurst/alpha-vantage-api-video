# Alpha Vantage API Code

## This repo is a companion for a youtube video I've made about the Alpha Vantage API

### You can watch the video here - [aaa](aaa)

## Running this project

1. Go to [Alpha Vantage](https://www.alphavantage.co/) and get free API key.
2. Run `npm i` to install node_modules.
3. Add a `.env` file to the root directory. This is where you'll be adding you Alpha Vantage API Key.
4. In the `.env` add: `ALPHA_VANTAGE_KEY=replacethiswithyourapikey`
5. Run `npm start` in a terminal window and the script will run, and then you'll see a `stockData.json` file in the root of the directory with all the data in as an object.
