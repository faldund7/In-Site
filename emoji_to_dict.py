import os
import emot
import csv



emoji_string = "yo whats up 🤠🥰"
emot_core = emot.core.emot() 
print(emot_core.emoji(emoji_string)["mean"])
 