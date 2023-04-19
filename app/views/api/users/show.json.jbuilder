json.user do
  json.extract! @user, :id, :username, :firstname, :surname, :gender, :email, :age
end