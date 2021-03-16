export default (req, _, next) => {
  const { user } = req;
  req.active = !(user && user.role === 'admin');
  return next();
};
