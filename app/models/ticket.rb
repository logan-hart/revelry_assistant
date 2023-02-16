class Ticket < ApplicationRecord
    validates :event_id, :user_id, :num_tickets, presence:true

    belongs_to :user, foreign_key: :user_id
    belongs_to :event, foreign_key: :event_id
end


