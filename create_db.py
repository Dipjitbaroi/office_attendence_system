from jse_attendence import app, db
from jse_attendence.models import User, Post
app.app_context().push()
db.create_all()