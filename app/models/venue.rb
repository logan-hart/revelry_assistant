class Venue < ApplicationRecord

    validates :name, uniqueness: true, presence: true
end
