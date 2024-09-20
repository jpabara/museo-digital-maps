import os
import sys
import openpyxl
from collections import OrderedDict
import json
import pandas as pd


if len(sys.argv) < 2:
    print('Usage: python3 xlsx2json.py filename.xlsx')
    sys.exit()

if len(sys.argv) > 3:
    print('Usage: python3 xlsx2json.py filename.xlsx')
    sys.exit()

filename = sys.argv[1]
path = os.path.join(os.getcwd(), filename)

print(path)




dataframe = pd.read_excel(path)

json_str = dataframe.to_json(orient='records')
json_obj = json.loads(json_str)

geojson = {
    "type": "FeatureCollection",
    "features": []
}
for row in json_obj:
    print("row", row)
    feature = {
        "type": "Feature",
        "properties": { **row },
        "geometry": {
            "type": "Point",
            "coordinates": [row['longitude'], row['latitude']]
        }
    }
    geojson['features'].append(feature)

with open('./output/output.geojson', 'w') as f:
    f.write(json.dumps(geojson, indent=2))
    print('GeoJSON created')