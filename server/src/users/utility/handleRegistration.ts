import { user_model } from '../models/user';

const userExistsByEmail = async (email: String) => {
  const getUser: number = await user_model
    .find({ email: email })
    .count();
  return getUser > 0;
};

export const register = async (data: any) => {
  const { first_name, last_name, email, password } = data;

  const userExists = await userExistsByEmail(email);

  if (!userExists) {
    const date = new Date();
    const dateString = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const model = new user_model({
      name: first_name + ' ' + last_name,
      email: email,
      password: password,
      registration_date: dateString,
    });

    const response = await model.save();

    return {
      success: true,
      message: 'User has been created!',
    };
  }

  return {
    success: false,
    message: 'user already exists',
  };
};

export const details = async (data: any) => {
  const { email, password } = data;

  const user = await user_model.findOne({ email: email });

  if (user) {
    if (user.password === password) {
      return {
        success: true,
        message: 'user matched',
      };
    } else {
      return {
        success: false,
        message: "password didn't match",
      };
    }
  }

  return {
    success: false,
    message: 'user is not available',
  };
};
