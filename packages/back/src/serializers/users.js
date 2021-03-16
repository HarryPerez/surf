const signInMapper = ({
  expirationTime = process.env.JWT_EXPIRATION_TIME,
  token,
  role,
}) => ({ expirationTime, token, role });

export default signInMapper;
