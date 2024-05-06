from flask import Flask,request, jsonify ,send_from_directory  
import joblib
from flask_cors import CORS
import os

current_dir = os.path.dirname(__file__)

temp_path = os.path.join(current_dir,'dist','index.html')

model3_path = os.path.join(current_dir, 'models', 'KNN_model.pkl')
model4_path = os.path.join(current_dir, 'models', 'decision_tree_model.pkl')
model1_path = os.path.join(current_dir, 'models', 'random_forest_model.pkl')
model2_path = os.path.join(current_dir, 'models', 'SVC_model.pkl')

model1 = joblib.load(model1_path)
model2 = joblib.load(model2_path)
model3 = joblib.load(model3_path)
model4 = joblib.load(model4_path)

app = Flask(__name__)
CORS(app,origins="*")

@app.route('/')       
def hello(): 
    return send_from_directory('dist', 'index.html')

@app.route('/assets/<path:path>')
def serve_assets(path):
    return send_from_directory('dist/assets', path)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    features = [data['RI'], data['Na'], data['Mg'], data['Al'], data['Si'], data['K'], data['Ca'], data['Ba'], data['Fe']]
    prediction = None

    if data['Model'] == '1':
        prediction = model1.predict([features])
    elif data['Model'] == '2':
        prediction = model2.predict([features])
    elif data['Model'] == '3':
        prediction = model3.predict([features])
    elif data['Model'] == '4':
        prediction = model4.predict([features])

    if prediction is None:
        return jsonify({'error': 'Invalid model selected'})

    return jsonify({'prediction': prediction.tolist()})


if __name__=='__main__': 
   app.run() 