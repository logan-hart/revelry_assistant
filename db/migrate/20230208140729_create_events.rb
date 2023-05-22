class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name, null:false
      t.date :start_date, null:false
      t.date :end_date, null:false
      t.string :start_time, null: false
      t.string :end_time, null:false
      t.string :lineup, array:true
      t.string :genres, array:true
      t.string :details
      t.integer :cost, null:false
      t.integer :age_minimum, null:false
      t.string :images
      t.string :promotional_name
      t.string :promotional_links
      t.string :media
      t.integer :available_tickets
      t.integer :tickets_sold, default: 0
      t.string :venue, null:false
      t.references :promoter, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
