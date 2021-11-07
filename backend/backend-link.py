import uvicorn
from fastapi import FastAPI
import tensorflow as tf
import transformers
import numpy as np
from pydantic import BaseModel
import pandas as pd

from transformers import BertTokenizer

class InputSentence(BaseModel):
    input_s:str

app = FastAPI()

MAX_LEN=50
PRE_TRAINED_MODEL_NAME = 'bert-base-cased'
tokenizer = BertTokenizer.from_pretrained(PRE_TRAINED_MODEL_NAME)

def output_bert_vector(document):
    return tokenizer.encode_plus(
        document,
        add_special_tokens=True,
        max_length=MAX_LEN,
        return_token_type_ids=False,
        pad_to_max_length=True,
        return_attention_mask=True,
        truncation=True
    )['input_ids']

embed_model = tf.keras.models.load_model('my_model.h5')
print(embed_model.layers)
# class_model = tf.keras.models.load_model('backend/old_model')

# load truth table
truth_csv = pd.from_csv('researched_ground_truth.csv')

truth_table = []
for i in range(len(truth_csv)):
    text = truth_csv.content[i]
    link = truth_csv.link[i]

    v = output_bert_vector(text)

    embed = np.array(embed_model.predict([v]))
    truth_table.append({
        "text": text,
        "link": link,
        "embed": embed
    })

@app.post("/")
async def create_output(imp:InputSentence):
    vec = output_bert_vector(imp.input_s)
    prob = class_model.predict([vec])

    emb = np.array(embed_model.predict([vec]))
    res = sorted(truth_table, key=lambda a: np.linalg.norm(emb - a['embed']))
    
    
uvicorn.run(app, host="localhost", port=5000, log_level="info")