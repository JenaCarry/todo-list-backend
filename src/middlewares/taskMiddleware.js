const validateFieldTitle = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    res.status(400).json({ message: 'The field "title" is required' });
  }

  if (body.title === "") {
    res.status(400).json({ message: '"title" cannot be empty' });
  }

  next();
};

const validateFieldStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    res.status(400).json({ message: 'The field "status" is required' });
  }

  if (body.status === "") {
    res.status(400).json({ message: '"status" cannot be empty' });
  }

  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldStatus,
};
