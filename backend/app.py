import json
from flask import Flask, request
from db import db
from db import Person
from db import History

# define db filename
db_filename = "curve.db"
app = Flask(__name__)

# setup config
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_filename}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# initialize app
db.init_app(app)
with app.app_context():
    db.create_all()


# generalized response formats
def success_response(data, code=200):
    return json.dumps({"success": True, "data": data}), code


def failure_response(message, code=404):
    return json.dumps({"success": False, "error": message}), code


# -- PERSON ROUTES ------------------------------------------------------

@app.route('/')
@app.route('/persons/')
def get_persons():
    return success_response([p.serialize() for p in Person.query.all()])


@app.route('/persons/', methods=['POST'])
def create_person():
    request_body = json.loads(request.data)
    new_person = Person(netid=request_body.get("netid"), name=request_body.get("name"), birthday=request_body.get("birthday"), qrcode=request_body.get("qrcode"))
    db.session.add(new_person)
    db.session.commit()
    return success_response(new_person.serialize())


@app.route('/persons/<string:netid>/')
def get_person(netid):
    person = Person.query.filter_by(netid=netid).first()
    if person is None:
        return failure_response("Person not found!")
    return success_response(person.serialize())


# @app.route('/tasks/<int:task_id>/', methods=['POST'])
# def update_task(task_id):
#     body = json.loads(request.data)
#     task = Task.query.filter_by(id=task_id).first()
#     if task is None:
#         return failure_response("Task not found!")
#     task.description = body.get("description", task.description)
#     task.done = body.get("done", task.done)
#     db.session.commit()
#     return success_response(task.serialize())


# @app.route('/tasks/<int:task_id>/', methods=['DELETE'])
# def delete_task(task_id):
#     task = Task.query.filter_by(id=task_id).first()
#     if task is None:
#         return failure_response("Task not found!")
#     db.session.delete(task)
#     db.session.commit()
#     return success_response(task.serialize())


# # -- SUBTASK ROUTES ---------------------------------------------------

@app.route('/persons/<string:netid>/historylog/', methods=['POST'])
def create_history(netid):
    person = Person.query.filter_by(netid=netid).first()
    if person is None:
        return failure_response("Person not found!")
    request_body = json.loads(request.data)
    new_history = History(date=request_body.get("date"), contact=request_body.get("contact"), netid=netid)
    db.session.add(new_history)
    db.session.commit()
    return success_response(person.serialize())


# # -- CATEGORY ROUTES --------------------------------------------------

# @app.route('/tasks/<int:task_id>/category/', methods=['POST'])
# def assign_category(task_id):
#     task = Task.query.filter_by(id=task_id).first()
#     if task is None:
#         return failure_response("Task not found!")
#     body = json.loads(request.data)
#     description = body.get("description")
#     color = body.get("color")
#     category = Category.query.filter_by(description=description, color=color).first()
#     if category is None:
#         category = Category(description=description, color=color)
#     task.categories.append(category)
#     db.session.commit()
#     return success_response(task.serialize())


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
