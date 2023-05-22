class Event < ApplicationRecord
    validates :name, :start_date, :end_date, :start_time, :end_time, :cost, :age_minimum, presence: true


    belongs_to :promoter, foreign_key: :promoter_id, class_name: :User
    has_many :tickets, foreign_key: :event_id, dependent: :destroy
    has_many :ticket_holders, through: :tickets, source: :user

    has_one_attached :photo
    
    # def remaining_tickets
    #     available_tickets - tickets_sold
    # end

end
