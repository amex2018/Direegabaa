module.exports = funcs => (req, res, next) =>
      Promise.resolve(funcs(req, res, next))
      .catch(next)