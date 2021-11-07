import uvicorn
import fastapi
import tflow
app = FastAPI()

@app.post("/")
async def create_output(imp:InputSentence):
   
uvicorn.run(app, host="localhost", port=5000, log_level="info")