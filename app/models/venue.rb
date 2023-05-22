class Venue < ApplicationRecord

    validates :name, uniqueness: true, null: false
end
