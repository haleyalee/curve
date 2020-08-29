from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Person(db.Model):
    __tablename__ = "person"
    # id = db.Column(db.Integer, primary_key=True)
    netid = db.Column(db.String, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    birthday = db.Column(db.String, nullable=False)
    qrcode = db.Column(db.String, nullable=False)
    historylog = db.relationship("History", cascade="delete")

    def __init__(self, **kwargs):
        self.netid = kwargs.get("netid", "")
        self.name = kwargs.get("name", "")
        self.birthday = kwargs.get("birthday", "")
        self.qrcode = kwargs.get("qrcode", "")
    
    def serialize(self):
        return {
            "netid": self.netid,
            "name": self.name,
            "birthday": self.birthday,
            "qrcode": self.qrcode,
            "historylog": [h.serialize() for h in self.historylog]
        }


class History(db.Model):
    __tablename__ = "history"
    id = db.Column(db.Integer, primary_key=True)
    netid = db.Column(db.String, db.ForeignKey("person.netid"), nullable=False)
    date = db.Column(db.String, nullable=False)
    contact = db.Column(db.String, nullable=False)
    
    def __init__(self, **kwargs):
        self.date = kwargs.get("date", "")
        self.contact = kwargs.get("contact", "")
        self.netid = kwargs.get("netid")
    
    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "contact": self.contact,
        }



# association_table = db.Table(
#     "association",
#     db.Model.metadata,
#     db.Column("task_id", db.Integer, db.ForeignKey("task.id")),
#     db.Column("category_id", db.Integer, db.ForeignKey("category.id")),
# )

# class Task(db.Model):
#     __tablename__ = "task"
#     id = db.Column(db.Integer, primary_key=True)
#     description = db.Column(db.String, nullable=False)
#     done = db.Column(db.Boolean, nullable=False)
#     subtasks = db.relationship("Subtask", cascade="delete")
#     categories = db.relationship("Category", secondary=association_table, back_populates="tasks")

#     def __init__(self, **kwargs):
#         self.description = kwargs.get("description", "")
#         self.done = kwargs.get("done", False)

#     def serialize(self):
#         return {
#             "id": self.id,
#             "description": self.description,
#             "done": self.done,
#             "subtask": [s.serialize() for s in self.subtasks],
#             "categories": [c.serialize() for c in self.categories],
#         }


# class Subtask(db.Model):
#     __tablename__ = "subtask"
#     id = db.Column(db.Integer, primary_key=True)
#     description = db.Column(db.String, nullable=False)
#     done = db.Column(db.Boolean, nullable=False)
#     task_id = db.Column(db.Integer, db.ForeignKey("task.id"), nullable=False)

#     def __init__(self, **kwargs):
#         self.description = kwargs.get("description", "")
#         self.done = kwargs.get("done", False)
#         self.task_id = kwargs.get("task_id")

#     def serialize(self):
#         return {
#             "id": self.id,
#             "description": self.description,
#             "done": self.done,
#         }


# class Category(db.Model):
#     __tablename__ = "category"
#     id = db.Column(db.Integer, primary_key=True)
#     description = db.Column(db.String, nullable=False)
#     color = db.Column(db.String, nullable=False)
#     tasks = db.relationship("Task", secondary=association_table, back_populates="categories")

#     def __init__(self, **kwargs):
#         self.description = kwargs.get("description", "")
#         self.color = kwargs.get("color")

#     def serialize(self):
#         return {
#             "id": self.id,
#             "description": self.description,
#             "color": self.color,
#         }


