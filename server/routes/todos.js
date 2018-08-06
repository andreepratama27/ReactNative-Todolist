const { Todo } = require("../models");

const getTodos = (req, res) => {
  Todo.findAll()
    .then(data => {
      res.json({ data });
    })

    .catch(err => {
      res.json({
        error: {
          code: 404,
          message: "not found"
        }
      });
    });
};

const getTodosById = (req, res) => {
  Todo.findAll({ where: { id: req.params.id } })
    .then(res => {
      res.json({
        success: true,
        data: res
      });
    })
    .catch(err => {
      res.json({
        success: false,
        error: err
      });
    });
};

const postTodos = (req, res) => {
  Todo.create(req.body)
    .then(data => {
      res.json({ data });
    })
    .catch(err => {
      res.json({
        error: err
      });
    });
};

const deleteTodos = (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res
      .json({
        success: true,
        message: "Todo successfully deleted"
      })
      .catch(err => {
        res.json({
          success: false,
          error: err
        });
      });
  });
  // const deleteTodos = Todo.destroy({ force: true, truncate: true });

  // if (deleteTodos) {
  //   res.json({
  //     success: true,
  //     message: "deleted all data"
  //   });
  // } else {
  //   res.json({
  //     error: {
  //       message: "fail to delete all data"
  //     }
  //   });
  // }
};

module.exports = {
  getTodos,
  getTodosById,
  postTodos,
  deleteTodos
};
