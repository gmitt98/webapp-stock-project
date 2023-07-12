import os
current_directory = os.getcwd()
file_directory = os.path.dirname(os.path.abspath(__file__))
os.chdir(file_directory)

import csv
import mysql.connector
from datetime import date

today_date = date.today()

import config

csv_filename = f"stock_data_{today_date}.csv"

try:
     connection = mysql.connector.connect(
        host=config.myhost,
        database=config.mydatabase,
        user=config.myuser,
        password=config.mypassword
        )