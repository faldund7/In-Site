import os
import emot
import csv
import pandas as pd
import emoji
import string

emot_core = emot.core.emot() 
df = pd.read_csv("en_dup.csv")
content = df.content
label = df.label

edited_content = []
new_item = ""
for i, item in enumerate(content):
    new_item = item
    for character in item:
        if character not in string.ascii_lowercase and character not in string.ascii_uppercase:
            new_item = new_item.replace(character, " ")
    df.content[i] = new_item
print(df.content.tolist())

df = df.drop(df.columns[[2,3,4]], axis=1)
print(df)
df.to_csv("modified_test_dataset.csv")