class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname, null:false
      t.string :surname, null:false
      t.string :gender
      t.string :email, null: false
      t.string :username, null: false
      t.string :password_digest, null: false
      t.integer :age, null:false
      t.boolean :subscribed, default: true
      t.string :session_token, null: false


      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
