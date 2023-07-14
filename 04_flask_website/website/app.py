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
        print('starting geojson scraper')
        url="https://companiesmarketcap.com/usa/largest-companies-in-the-usa-by-market-cap"
        #mc=mg.MC_Scraper(url)
        mc=MC_Scraper(url)
        print('getting data')
        mc.get_data()
        print('getting additional data')
        mc.get_additional_data()
    ##    mc.print_dd()
    ##    mc.save_to_csv('top_100_company_tickers.csv')
        cwd=os.path.dirname(__file__)
        print('cwd is: %s'%cwd)
        print('saving file')
        mc.save_to_json(os.path.join(cwd,'static/map_one/data.geojson'))
        print('completed')
        return "done."
    return app

if __name__=='__main__':
    app=create_app()
    port=int(os.environ.get('PORT', 8080))
    app.run(debug=True, host='0.0.0.0', port=port)