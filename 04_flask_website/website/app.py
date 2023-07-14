import os,sys
from flask import Flask
from flask import render_template
try:
    from website.get_geojson.marketcap_geojson import MC_Scraper
except:
    from get_geojson.marketcap_geojson import MC_Scraper

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/get_geojson')
    def get_geojson():
        print('hello from get_geojson')

        url="https://companiesmarketcap.com/usa/largest-companies-in-the-usa-by-market-cap"
        #mc=mg.MC_Scraper(url)
        mc=MC_Scraper(url)
        mc.get_data()
        mc.get_additional_data()
    ##    mc.print_dd()
    ##    mc.save_to_csv('top_100_company_tickers.csv')
        mc.save_to_json('../static/data.geojson')
        return ""

    return app