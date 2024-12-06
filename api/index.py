from fastapi import FastAPI

ENGINEER_ROLES = [
    {'title': 'Frontend Developer', 'mainskill': 'React'},
    {'title': 'Backend Developer', 'mainskill': 'Node.js'},
    {'title': 'Fullstack Developer', 'mainskill': 'Next.js'},
    {'title': 'Machine Learning Engineer', 'mainskill': 'Tensorflow'},
    {'title': 'Data Scientist', 'mainskill': 'Apache Spark'},
    {'title': 'Software Architect', 'mainskill': 'System Analysis'},
]

# Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs",  openapi_url="/api/py/openapi.json")


@app.get("/api/py/engineer-roles")
async def read_category_by_query(title: str): 
    role_to_return = None
    for role in ENGINEER_ROLES:
        if role.get('title').casefold() == title.casefold():
            role_to_return = role
    return role_to_return
