# webapp-stock-project

Background
--------
We wanted to create a dashboard where the user could compare two stock tickers through different metrics, plots, and charts. This dashboard allows you to browse and relate helpful financial information about the top 100 US companies from [Yahoo finance](https://finance.yahoo.com/).

## Objectives ##

### Webscapers and Database
The data for this project were pulled from Yahoo Finance, as mentioned above, with the yfinance module in Python running locally. Additional data were pulled from https://companiesmarketcap.com/usa/largest-companies-in-the-usa-by-market-cap/ in order to get the list of companies that we were working with. All of these data were loaded into a MySQL database on AWS. We used AWS Lambda services, written in Python, and triggered with a AWS APIGateway API, to make these data available via an open API. The database itself, while hosted on AWS, is managed locally with MySQLWorkbench.
The folder "stock_scrape_load" contains the code and the data associated with the daily data pulls. The subfolder "jobs" contains the python code, the subfolder "data" contains the daily output data as well as the SQL dumps files that were used to upload this to the RDS MySQL database. There was an attempt to write another script to load the data automatically but it was not debugged in time. We also saved the historical company stock data in csv and JSON formats for easy local development.
The Lambda code is in the main folder. The files are:
* company_addresses_lambda.py
* top_100_tickers_query_lambda.py
* stock_data_lambda.py -- this one works but the API Gateway API is having CORS issues that we could not fully resolve. A screenshot shows it working from local machine.

### Flask App Deployment
The dashboard is accessed through an app powered by docker. 
![image_720-3](https://github.com/gmitt98/webapp-stock-project/assets/127706155/cf1061b1-2694-41c9-b8f3-c09a257b6b2c)


### Visualization Dashboard
This dahsboard has two dropdown menus, from which the user selects two different stocks to comapre. The comparisions include:

![image_720](https://github.com/gmitt98/webapp-stock-project/assets/127706155/8326e771-72cc-45a0-a314-c46d252da7f8)


- #### Information about each stock:
  - the ticker
  - date of information
  - sector
  - 52 week change
  - ask
  - bid
  - 52 week high/low
  - daily open
  - previous close
  - daily volume
  - quick ratio
  - 10 day average volume
  - marketcap
- #### OHLC (open high low close) chart
![screenshot_2023-07-16_at_5 32 45_pm_360](https://github.com/gmitt98/webapp-stock-project/assets/127706155/09fdd051-576e-4a29-bc32-d609d6e40606)

- #### Gauge Chart comparing:
  - previous close
  - 52 week high/low
  - delta being the difference between previous close and 52 week low
![screenshot_2023-07-13_at_9 05 16_pm_720](https://github.com/gmitt98/webapp-stock-project/assets/127706155/d333921e-ae48-4aa5-93a2-215362e6f35a)

### Interactive Map
![image_720-1](https://github.com/gmitt98/webapp-stock-project/assets/127706155/e8bacb3c-80fd-4bb6-a9cb-cd77e0f69e98)

