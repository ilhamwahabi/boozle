import csv
import os.path
from pymongo import MongoClient

stocks = []
with open(os.path.dirname(__file__) + '/../data/companylist.csv', 'r') as f:
  next(f)
  fieldnames = ("symbol", "name", "lastsale", "marketcap", "adrtso", "ipoyear", "sector", "industry", "sumq")
  reader = csv.DictReader(f, fieldnames)
  for row in reader:
    stocks.append({
      "symbol": row["symbol"],
      "name": row["name"],
      "sector": row["sector"]
    })

uri = "mongodb+srv://porto-admin:superadmin@porto-database-zt7t5.mongodb.net/porto?retryWrites=true"
client = MongoClient(uri)
porto = client.porto
db_stocks = porto.stocks
db_stocks.insert_many(stocks)
