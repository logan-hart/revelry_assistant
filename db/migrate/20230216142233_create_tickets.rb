class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.integer :num_tickets, null:false
      t.references :user, null:false, foreign_key: true
      t.references :event, null:false, foreign_key: true
      t.timestamps
    end
  end
end
