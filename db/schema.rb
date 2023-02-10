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

ActiveRecord::Schema[7.0].define(version: 2023_02_10_185423) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.time "start_time", null: false
    t.time "end_time", null: false
    t.string "lineup", array: true
    t.string "genres"
    t.string "details"
    t.integer "cost", null: false
    t.integer "age_minimum", null: false
    t.string "images"
    t.string "promotional_links"
    t.string "media"
    t.integer "available_tickets"
    t.integer "tickets_sold", default: 0
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

  create_table "venues", force: :cascade do |t|
    t.string "name", null: false
    t.integer "maximum_capacity"
    t.bigint "upcoming_events_id"
    t.string "address", null: false
    t.string "phone_number"
    t.string "links"
    t.string "image"
    t.bigint "followers_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followers_id"], name: "index_venues_on_followers_id"
    t.index ["upcoming_events_id"], name: "index_venues_on_upcoming_events_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "events", "users", column: "promoter_id"
  add_foreign_key "venues", "events", column: "upcoming_events_id"
  add_foreign_key "venues", "users", column: "followers_id"
end
