json.user do
  json.extract! @user, :id, :email, :username, :age
end