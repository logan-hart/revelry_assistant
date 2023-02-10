class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.string :name, null:false, unique: true
      t.integer :maximum_capacity
      t.references :upcoming_events, foreign_key: {to_table: :events}
      t.string :address, null: false
      t.string :phone_number
      t.string :links
      t.string :image
      t.references :followers, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
