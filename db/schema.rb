# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_08_140729) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.time "start_time", null: false
    t.time "end_time", null: false
    t.string "lineup"
    t.string "genres"
    t.string "details"
    t.integer "cost", null: false
    t.integer "age_minimum", null: false
    t.string "images"
    t.string "promotional_links"
    t.string "media"
    t.integer "available_tickets"
    t.bigint "promoter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["promoter_id"], name: "index_events_on_promoter_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "surname", null: false
    t.string "gender"
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.integer "age", null: false
    t.boolean "subscribed", default: true
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "events", "users", column: "promoter_id"
end
